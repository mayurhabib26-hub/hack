import { useState, useEffect } from 'react';

export interface CountdownTime {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  isExpired: boolean;
  isRegistrationClosed: boolean;
  registrationDaysLeft: number;
}

export function useCountdown(
  hackathonDateStr: string = '2026-12-12T11:00:00+05:30',
  regDeadlineStr: string = '2026-12-10T11:00:00+05:30'
): CountdownTime {
  const calculate = (): CountdownTime => {
    const now = new Date().getTime();
    const eventTime = new Date(hackathonDateStr).getTime();
    const regDeadline = new Date(regDeadlineStr).getTime();

    const diff = Math.max(0, eventTime - now);
    const regDiff = regDeadline - now;

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);

    const registrationDaysLeft = Math.max(0, Math.ceil(regDiff / (1000 * 60 * 60 * 24)));

    return {
      days,
      hours,
      minutes,
      seconds,
      isExpired: diff <= 0,
      isRegistrationClosed: regDiff <= 0,
      registrationDaysLeft,
    };
  };

  const [timeLeft, setTimeLeft] = useState<CountdownTime>(calculate);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculate());
    }, 1000);

    return () => clearInterval(timer);
  }, [hackathonDateStr, regDeadlineStr]);

  return timeLeft;
}
