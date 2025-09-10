"use client";
const error = ({ error }: { error: Error }) => {
  return (
    <div className="flex items-center min-h-screen justify-between">
      {error?.message}
    </div>
  );
};

export default error;
