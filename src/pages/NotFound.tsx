import React from 'react';
import { ArrowLeft, Compass } from 'lucide-react';
import { PageTransition } from '../components/layout/PageTransition';
import { Button } from '../components/ui/Button';

const NotFound: React.FC = () => {
  return (
    <PageTransition>
      <section className="min-h-[82vh] bg-[#F6F4F0] flex items-center pt-28 pb-20 px-4 sm:px-6 lg:px-8 topo-texture-light overflow-hidden">
        <div className="mx-auto max-w-4xl w-full text-center space-y-8">
          <div className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.18em] text-[#F26A1B]">
            <Compass size={16} />
            <span>404 · Off The Trail</span>
          </div>

          <h1 className="font-display text-[clamp(2.5rem,5.5vw,4.5rem)] leading-[1.02] tracking-tight text-[#0F1F3D]">
            <span className="font-light">Looks like you wandered </span>
            <span className="font-extrabold">past the ridgeline.</span>
          </h1>

          <p className="text-base sm:text-lg text-[#6B7686] max-w-xl mx-auto leading-relaxed">
            The page you are looking for is not on this route. Head back to base camp or request a free gutter estimate directly.
          </p>

          {/* Custom Mountain Ridgeline Illustration */}
          <div className="mx-auto max-w-lg rounded-sm border border-[#D9DEE5] bg-[#0F1F3D] p-6 shadow-md overflow-hidden">
            <svg
              viewBox="0 0 460 150"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-full h-auto"
              aria-hidden="true"
            >
              <polygon
                points="0,150 70,95 140,120 225,38 305,98 375,60 460,118 460,150"
                fill="#14284B"
              />
              <polyline
                points="0,120 70,95 140,120 225,38 305,98 375,60 460,118"
                stroke="#F26A1B"
                strokeWidth="3"
                strokeLinejoin="round"
              />
              <circle cx="225" cy="38" r="5" fill="#FFFFFF" />
              <text
                x="230"
                y="132"
                textAnchor="middle"
                fill="#D9DEE5"
                fontFamily="'JetBrains Mono', monospace"
                fontSize="12"
                letterSpacing="3"
              >
                PEAKLINE TRAILHEAD
              </text>
            </svg>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <Button to="/" variant="primary" size="lg">
              <ArrowLeft size={17} />
              Back to Home
            </Button>
            <Button to="/contact" variant="outline" size="lg">
              Get a Free Quote
            </Button>
          </div>
        </div>
      </section>
    </PageTransition>
  );
};

export default NotFound;
