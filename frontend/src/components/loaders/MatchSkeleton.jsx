function MatchSkeleton() {
  return (
    <div className="animate-pulse border rounded-lg p-4 mb-4">
      {/* Date */}
      <div className="h-4 w-32 bg-gray-300 rounded mb-4"></div>

      {/* Teams */}
      <div className="flex justify-between items-center">
        <div className="h-5 w-40 bg-gray-300 rounded"></div>

        <div className="h-5 w-8 bg-gray-300 rounded"></div>

        <div className="h-5 w-40 bg-gray-300 rounded"></div>
      </div>
    </div>
  );
}

export default MatchSkeleton;