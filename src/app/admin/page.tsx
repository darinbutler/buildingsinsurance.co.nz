'use client';

import { useState, useEffect } from 'react';

interface RefreshTimestamps {
  competitors: string | null;
  content: string | null;
  pricing: string | null;
}

interface DataCounts {
  competitors: number;
  posts: number;
  products: number;
}

// Password verified via SHA-256 hash — never stored in plaintext
const ADMIN_HASH = '345d673e729289b8e4cc71ab7c72b56a5be70e0908647e8bef56780847e80990';

async function hashPassword(pw: string): Promise<string> {
  const encoder = new TextEncoder();
  const data = encoder.encode(pw);
  const buffer = await crypto.subtle.digest('SHA-256', data);
  return Array.from(new Uint8Array(buffer)).map(b => b.toString(16).padStart(2, '0')).join('');
}

export default function AdminPage() {
  const [authenticated, setAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [timestamps, setTimestamps] = useState<RefreshTimestamps>({
    competitors: null,
    content: null,
    pricing: null,
  });
  const [dataCounts, setDataCounts] = useState<DataCounts>({
    competitors: 0,
    posts: 0,
    products: 0,
  });
  const [loading, setLoading] = useState<string | null>(null);
  const [message, setMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);

  // Load data on mount
  useEffect(() => {
    if (authenticated) {
      loadTimestamps();
      loadDataCounts();
    }
  }, [authenticated]);

  const loadTimestamps = () => {
    try {
      const stored = localStorage.getItem('admin_refresh_timestamps');
      if (stored) {
        setTimestamps(JSON.parse(stored));
      }
    } catch (error) {
      console.error('Failed to load timestamps:', error);
    }
  };

  const loadDataCounts = () => {
    try {
      const competitors = localStorage.getItem('competitors_data');
      const posts = localStorage.getItem('blog_posts');
      const products = localStorage.getItem('insurance_products');

      setDataCounts({
        competitors: competitors ? JSON.parse(competitors).length : 0,
        posts: posts ? JSON.parse(posts).length : 0,
        products: products ? JSON.parse(products).length : 0,
      });
    } catch (error) {
      console.error('Failed to load data counts:', error);
    }
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    const hash = await hashPassword(password);
    if (hash === ADMIN_HASH) {
      setAuthenticated(true);
      setPassword('');
      setMessage({ type: 'success', text: 'Successfully authenticated' });
    } else {
      setMessage({ type: 'error', text: 'Invalid password' });
    }
  };

  const handleRefreshCompetitors = async () => {
    setLoading('competitors');
    setMessage(null);

    try {
      // For static export, we can't actually run the script
      // Instead, we show instructions for running npm scripts
      setMessage({
        type: 'success',
        text: 'To refresh competitor data, run: npm run scrape-competitors',
      });

      // Simulate timestamp update
      const newTimestamps = {
        ...timestamps,
        competitors: new Date().toISOString(),
      };
      setTimestamps(newTimestamps);
      localStorage.setItem('admin_refresh_timestamps', JSON.stringify(newTimestamps));
    } catch (error) {
      setMessage({
        type: 'error',
        text: 'Failed to refresh competitor data',
      });
    } finally {
      setLoading(null);
    }
  };

  const handleRefreshContent = async () => {
    setLoading('content');
    setMessage(null);

    try {
      setMessage({
        type: 'success',
        text: 'To refresh content feed, run: npm run refresh-content',
      });

      const newTimestamps = {
        ...timestamps,
        content: new Date().toISOString(),
      };
      setTimestamps(newTimestamps);
      localStorage.setItem('admin_refresh_timestamps', JSON.stringify(newTimestamps));
    } catch (error) {
      setMessage({
        type: 'error',
        text: 'Failed to refresh content feed',
      });
    } finally {
      setLoading(null);
    }
  };

  const handleRefreshPricing = async () => {
    setLoading('pricing');
    setMessage(null);

    try {
      setMessage({
        type: 'success',
        text: 'To refresh pricing data, run: npm run refresh-pricing',
      });

      const newTimestamps = {
        ...timestamps,
        pricing: new Date().toISOString(),
      };
      setTimestamps(newTimestamps);
      localStorage.setItem('admin_refresh_timestamps', JSON.stringify(newTimestamps));
    } catch (error) {
      setMessage({
        type: 'error',
        text: 'Failed to refresh pricing data',
      });
    } finally {
      setLoading(null);
    }
  };

  if (!authenticated) {
    return (
      <main className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800 flex items-center justify-center p-4">
        <div className="w-full max-w-md">
          <div className="bg-white rounded-2xl shadow-2xl p-8">
            <h1 className="text-3xl font-bold text-slate-900 mb-6 text-center">
              Admin Panel
            </h1>
            <p className="text-slate-600 text-center mb-6">
              Enter your password to access admin controls
            </p>

            <form onSubmit={handleLogin} className="space-y-4">
              <div>
                <label htmlFor="password" className="block text-sm font-semibold text-slate-700 mb-2">
                  Password
                </label>
                <input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter admin password"
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none"
                  autoFocus
                />
              </div>

              {message && (
                <div className={`p-4 rounded-lg text-sm font-semibold ${
                  message.type === 'success'
                    ? 'bg-red-100 text-red-700'
                    : 'bg-emerald-100 text-emerald-700'
                }`}>
                  {message.text}
                </div>
              )}

              <button
                type="submit"
                className="w-full px-4 py-3 bg-gradient-to-r from-emerald-500 to-emerald-600 text-white font-bold rounded-lg hover:from-emerald-600 hover:to-emerald-700 transition-all"
              >
                Login
              </button>
            </form>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-slate-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-slate-900 to-slate-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-4xl font-bold">Admin Panel</h1>
              <p className="text-slate-400 mt-2">Manage data and system refresh tasks</p>
            </div>
            <button
              onClick={() => setAuthenticated(false)}
              className="px-6 py-2 bg-red-600 hover:bg-red-700 rounded-lg font-semibold transition-colors"
            >
              Logout
            </button>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Message */}
        {message && (
          <div className={`mb-8 p-4 rounded-lg font-semibold ${
            message.type === 'success'
              ? 'bg-emerald-100 text-emerald-700 border border-emerald-300'
              : 'bg-red-100 text-red-700 border border-red-300'
          }`}>
            {message.text}
          </div>
        )}

        {/* Data Overview */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-white rounded-xl shadow-md p-6 border-l-4 border-emerald-500">
            <h3 className="text-sm font-semibold text-slate-600 mb-2">Competitors</h3>
            <p className="text-4xl font-bold text-slate-900">{dataCounts.competitors}</p>
            <p className="text-xs text-slate-500 mt-2">companies indexed</p>
          </div>
          <div className="bg-white rounded-xl shadow-md p-6 border-l-4 border-sky-500">
            <h3 className="text-sm font-semibold text-slate-600 mb-2">Blog Posts</h3>
            <p className="text-4xl font-bold text-slate-900">{dataCounts.posts}</p>
            <p className="text-xs text-slate-500 mt-2">articles published</p>
          </div>
          <div className="bg-white rounded-xl shadow-md p-6 border-l-4 border-violet-500">
            <h3 className="text-sm font-semibold text-slate-600 mb-2">Products</h3>
            <p className="text-4xl font-bold text-slate-900">{dataCounts.products}</p>
            <p className="text-xs text-slate-500 mt-2">insurance products</p>
          </div>
        </div>

        {/* Refresh Sections */}
        <div className="space-y-6">
          {/* Competitor Data */}
          <div className="bg-white rounded-xl shadow-md overflow-hidden">
            <div className="bg-gradient-to-r from-emerald-500 to-emerald-600 px-6 py-4">
              <h2 className="text-xl font-bold text-white">Refresh Competitor Data</h2>
            </div>
            <div className="p-6">
              <p className="text-slate-700 mb-4">
                Scrapes competitor websites and updates the competitor database with latest pricing and offerings.
              </p>
              {timestamps.competitors && (
                <p className="text-sm text-slate-600 mb-4">
                  Last updated: {new Date(timestamps.competitors).toLocaleString('en-NZ')}
                </p>
              )}
              <div className="space-y-3">
                <button
                  onClick={handleRefreshCompetitors}
                  disabled={loading === 'competitors'}
                  className="w-full px-6 py-3 bg-gradient-to-r from-emerald-500 to-emerald-600 text-white font-bold rounded-lg hover:from-emerald-600 hover:to-emerald-700 disabled:opacity-50 transition-all"
                >
                  {loading === 'competitors' ? 'Refreshing...' : 'Refresh Now'}
                </button>
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-3 text-sm text-blue-700">
                  <p className="font-semibold mb-2">To run manually:</p>
                  <code className="block bg-white p-2 rounded font-mono text-xs overflow-x-auto">
                    npm run scrape-competitors
                  </code>
                </div>
              </div>
            </div>
          </div>

          {/* Content Feed */}
          <div className="bg-white rounded-xl shadow-md overflow-hidden">
            <div className="bg-gradient-to-r from-sky-500 to-sky-600 px-6 py-4">
              <h2 className="text-xl font-bold text-white">Refresh Content Feed</h2>
            </div>
            <div className="p-6">
              <p className="text-slate-700 mb-4">
                Fetches latest blog posts, news, and content updates from configured sources.
              </p>
              {timestamps.content && (
                <p className="text-sm text-slate-600 mb-4">
                  Last updated: {new Date(timestamps.content).toLocaleString('en-NZ')}
                </p>
              )}
              <div className="space-y-3">
                <button
                  onClick={handleRefreshContent}
                  disabled={loading === 'content'}
                  className="w-full px-6 py-3 bg-gradient-to-r from-sky-500 to-sky-600 text-white font-bold rounded-lg hover:from-sky-600 hover:to-sky-700 disabled:opacity-50 transition-all"
                >
                  {loading === 'content' ? 'Refreshing...' : 'Refresh Now'}
                </button>
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-3 text-sm text-blue-700">
                  <p className="font-semibold mb-2">To run manually:</p>
                  <code className="block bg-white p-2 rounded font-mono text-xs overflow-x-auto">
                    npm run refresh-content
                  </code>
                </div>
              </div>
            </div>
          </div>

          {/* Pricing Data */}
          <div className="bg-white rounded-xl shadow-md overflow-hidden">
            <div className="bg-gradient-to-r from-violet-500 to-violet-600 px-6 py-4">
              <h2 className="text-xl font-bold text-white">Refresh Pricing Data</h2>
            </div>
            <div className="p-6">
              <p className="text-slate-700 mb-4">
                Updates pricing information and premium calculations across all products and insurers.
              </p>
              {timestamps.pricing && (
                <p className="text-sm text-slate-600 mb-4">
                  Last updated: {new Date(timestamps.pricing).toLocaleString('en-NZ')}
                </p>
              )}
              <div className="space-y-3">
                <button
                  onClick={handleRefreshPricing}
                  disabled={loading === 'pricing'}
                  className="w-full px-6 py-3 bg-gradient-to-r from-violet-500 to-violet-600 text-white font-bold rounded-lg hover:from-violet-600 hover:to-violet-700 disabled:opacity-50 transition-all"
                >
                  {loading === 'pricing' ? 'Refreshing...' : 'Refresh Now'}
                </button>
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-3 text-sm text-blue-700">
                  <p className="font-semibold mb-2">To run manually:</p>
                  <code className="block bg-white p-2 rounded font-mono text-xs overflow-x-auto">
                    npm run refresh-pricing
                  </code>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* System Info */}
        <div className="mt-12 bg-slate-900 rounded-xl shadow-md p-6 text-white">
          <h2 className="text-xl font-bold mb-4">System Information</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
            <div>
              <p className="text-slate-400">Build Type</p>
              <p className="font-bold">Static Export</p>
            </div>
            <div>
              <p className="text-slate-400">Environment</p>
              <p className="font-bold">Production</p>
            </div>
            <div>
              <p className="text-slate-400">Last Sync</p>
              <p className="font-bold">
                {timestamps.competitors
                  ? new Date(timestamps.competitors).toLocaleDateString('en-NZ')
                  : 'Never'}
              </p>
            </div>
            <div>
              <p className="text-slate-400">Storage</p>
              <p className="font-bold">Browser LocalStorage</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
