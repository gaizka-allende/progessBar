import { useEffect, useRef } from "react";
interface ProgressBarProps {
  apiURL: string;
  initialProgress?: number;
}

const timer = (s: number) => new Promise((res) => setTimeout(res, s * 1000));

let apiCallCount = 0;

const apiResponse = [10, 30, 50, 70, 90, 100];

export function ProgressBar<T>(props: ProgressBarProps) {
  const progressRef = useRef<HTMLDivElement>(null);
  const initialized = useRef(false);

  useEffect(() => {
    if (initialized.current) {
      return;
    }
    initialized.current = true;

    let progressInterval: ReturnType<typeof setInterval> | null = null;
    progressInterval = setInterval(async () => {
      await timer(2);
      if (apiResponse[apiCallCount] === 100 && progressInterval) {
        clearInterval(progressInterval);
      } else {
        apiCallCount++;
      }
      progressRef.current!.style.width = `${apiResponse[apiCallCount]}%`;
    }, 5000);
  }, []);

  return (
    <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
      <div
        ref={progressRef}
        className="bg-blue-600 h-2.5 rounded-full "
        style={{
          width: props.initialProgress ? `${props.initialProgress}%` : "0%",
        }}
      ></div>
    </div>
  );
}
