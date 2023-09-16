function ProgressBar({ progressPercentage }: {progressPercentage: number}) {
    return (
      <div className="h-4 w-full bg-gray-300 rounded-lg">
        <div
          style={{ width: `${progressPercentage}%` }}
          className={`h-full ${
            progressPercentage < 50
              ? 'bg-red-500'
              : progressPercentage < 75
              ? 'bg-yellow-500'
              : 'bg-green-500'
          } rounded-lg flex items-center justify-center`}
        >
          <span className="text-white font-bold text-sm">
            {progressPercentage}%
          </span>
        </div>
      </div>
    );
  }
  
  export default ProgressBar;