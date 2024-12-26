export const CTA = () => {
  return (
    <div className="py-24 bg-gradient-to-r from-primary to-secondary">
      <div className="container px-4 mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
          Ready to Get Started?
        </h2>
        <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
          Join us today and start building your next great project
        </p>
        <button className="bg-white text-primary px-8 py-3 rounded-lg text-lg font-semibold hover:bg-opacity-90 transition-all">
          Start Building
        </button>
      </div>
    </div>
  );
};