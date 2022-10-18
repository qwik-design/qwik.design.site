import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
import { Link } from '@builder.io/qwik-city';
import { QwikLottie } from 'qwik-lottie';

export default component$(() => {
  const defaultOptions = {
    path: 'https://assets7.lottiefiles.com/packages/lf20_M6jA5UNDHa.json',
  };
  return (
    <div>
      <h1>
        Welcome to Qwik Lottie <span class="lightning">⚡️</span>
      </h1>

      <QwikLottie options={defaultOptions}></QwikLottie>
    </div>
  );
});

export const head: DocumentHead = {
  title: 'Welcome to Qwik',
};
