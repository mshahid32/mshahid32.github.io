import { useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function NotFound() {
  useEffect(() => {
    document.title = 'Page Not Found, Shahid Aslam';
  }, []);
  return <main className="container not-found"><h1>Page not found</h1><Link className="link" to="/">Return to the homepage</Link></main>;
}
