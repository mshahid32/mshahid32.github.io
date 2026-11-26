import { termsSections } from '../data/legal';
import LegalPage from './LegalPage';

export default function Terms() {
  return <LegalPage title="Terms of Use" description="Terms of use for Word Fuse and Hue Dive by independent developer Muhammad Shahid Aslam." notice="" sections={termsSections} alternateLabel="Privacy Policy" alternateTo="/privacy" />;
}
