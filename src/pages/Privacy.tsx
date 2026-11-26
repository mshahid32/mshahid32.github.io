import { privacySections } from '../data/legal';
import LegalPage from './LegalPage';

export default function Privacy() {
  return <LegalPage title="Privacy Policy" description="Privacy policy for Word Fuse and Hue Dive by independent developer Muhammad Shahid Aslam." notice="" sections={privacySections} alternateLabel="Terms of Use" alternateTo="/terms" />;
}
