'use client';

import { useEffect, useState } from 'react';

const formatter = new Intl.DateTimeFormat('en-US', {
  timeZone: 'Asia/Manila',
  hour: 'numeric',
  minute: '2-digit',
});

const ManilaClock = () => {
  const [time, setTime] = useState(() => formatter.format(new Date()));

  useEffect(() => {
    const id = setInterval(() => setTime(formatter.format(new Date())), 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <span suppressHydrationWarning className="font-semibold text-slate-900">
      {time}
    </span>
  );
};

export default ManilaClock;
