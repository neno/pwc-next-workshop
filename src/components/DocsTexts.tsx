'use client';

import ReactIntro from '@/texts/react-intro.mdx';
import NextIntro from '@/texts/next-intro.mdx';
import NextProblem from '@/texts/next-problem.mdx';
import ReactNextSolution from '@/texts/react-next-solution.mdx';

export default function DocsTexts() {
  return (
    <>
      <h1>Documentation</h1>
      <section>
        <ReactIntro />
      </section>
      <section>
        <NextIntro />
      </section>
      <section>
        <NextProblem />
      </section>
      <section>
        <NextProblem />
      </section>
      <section>
        <ReactNextSolution />
      </section>
    </>
  );
}
