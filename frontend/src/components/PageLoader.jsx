import React from "react";
import { LoaderIcon } from "lucide-react";
function PageLoader() {
  return (
    <div className="flex items-center justify-center h-screan">
      <LoaderIcon className="size-10 animate-spin" />
    </div>
  );
}

export default PageLoader;
