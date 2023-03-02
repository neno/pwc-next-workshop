import DocsTexts from '@/components/DocsTexts';
import { NextImage } from '@/components/next-image/NextImage';
import Image from 'next/image';

export default async function Home() {
  return (
    <div className='grid grid-cols-12 gap-8'>
      {/* <DocsTexts />; */}
      <div className='col-span-8'>
        <h1>Documentation</h1>
        <section>
          <div>
            <h2>The problem with JS Frameworks</h2>

            <ul className='list'>
              <li>
                <strong>Wait for JS to download:</strong> Before the user can
                see or interact with the app the browser needs to download a lot
                of JS. And that takes time. But the longer the user needs to
                wait the worse the user experience gets
              </li>
              <li>
                <strong>No SEO:</strong> A client-side generated app ships with
                no content except for a blank HTML skeleton. This is bad and
                extremely limiting for SEO (Search Engine Optimization)
              </li>
            </ul>
          </div>
        </section>
        <section>
          <div>
            <h2>Why Next.js</h2>
            {/* <ul className='list'>
              <li>
                Next.js offers <strong>server side rendering</strong> (SSR) and
                solves the <strong>SEO</strong>. problem.
              </li>
              <li>
                Moreover it also provides a way to generate{' '}
                <strong>static pages</strong> (SSG).
              </li>
              <li>
                Next.js provides the best of both worlds: SEO optimized pages
                thanks to server side rendering and and fluid user experience -
                thanks to React
              </li>
            </ul>
            <p>
              The generated pages can then be sent to the client along with
              their JS bundle and the data. On the client the page is already
              visible while the React app gets initialized and rehydrated with
              the data. Once loaded, React takes over. This makes for a much
              faster and therefore better user experience. And it also solves
              the SEO problem. Next.js provides the best of both worlds:
            </p> */}
            <p>Next.js provides the best of both worlds:</p>
            <ul className='list'>
              <li>
                <strong>SEO optimized</strong> pages thanks to{' '}
                <strong>server side rendering</strong> and
              </li>
              <li>
                <strong>fluid user experience</strong> - thanks to React
              </li>
            </ul>

            <h4>Rendering in Next.js:</h4>
            <ul>
              <li>
                <strong>CSR</strong>: Client side rendering - for pages
                depending on user interaction
              </li>
              <li>
                <strong>SSR</strong>: Server side rendering - for dynamic but
                SEO optimized pages (pre-rendered at runtime)
              </li>
              <li>
                <strong>SSG</strong>: Static site generation - eg: static
                content from a CMS (pre-rendered at build time)
              </li>
            </ul>
            <Image
              src='/visualization-architecture-app-directory-feature.png'
              alt='Identifying Server and Client components in Next.js 13'
              width={1506}
              height={1177}
            />
          </div>
        </section>
        <section>
          <div>
            <h2>Dual Rendering</h2>
            <p>
              Once a page is loaded in the Browser React can take over. This is
              possible because the Next.js page contains:
            </p>

            <ul className='list'>
              <li>HTML</li>
              <li>Javascript and</li>
              <li>Data (sent as props to the page)</li>
            </ul>

            <p>
              This enables React to <em>hijack</em> the DOM and take over the
              page according to the current state.
            </p>

            <p>
              However, this means that Next.js renders content in 2 different
              places:
            </p>
            <ol className='list'>
              <li>
                <strong>on the server</strong>
              </li>
              <li>
                <strong>and on the client</strong>
              </li>
            </ol>
            <p>
              Therefore the problem remains: there is still a potentially huge
              bundle that needs to be sent from the server to client when the
              page is loaded which again may lead to a bad user experience.
            </p>
          </div>
        </section>
        <section>
          <div>
            <h2>A fine grained rendering?</h2>

            <p>
              Ideally a page is served with <strong>no latency</strong>. Of
              course this is not entirely possible. But at least the parts that
              do not depend on dynamic data can be served right away.
            </p>
            <p>
              Most sites and applications have a lot of{' '}
              <strong>static content</strong> that does not depend on direct
              user interaction.
            </p>
            <p>
              So the idea was born not only to render whole pages but to create
              single components that could be rendered on the server and then
              streamed to the client.
            </p>
            <p>
              React 18 and Next.js 13 brought the concept of{' '}
              <strong>Server Components</strong>.
            </p>

            {/* <p>
              Next.js 13 brings a new concept called{' '}
              <strong>Server Components</strong> which allows to render
              components on the server and stream them to the client.
            </p>

            <p>
              Reat 18 brought a lot of improvements and new features which seem
              geared towards a specific use-case: rendering React on the server.
              In particular via a concept called "Server Components".
            </p>
            <p>
              Of coures it was already possible to generate a whole React app on
              the server with "React Server Side Rendering". So the goal was not
              to create and ship an entire app bundle. But to create single
              components that can be rendered on the server and then streamed to
              the client.
            </p> */}
            <p>
              And with the release of Next.js 13 we can see all these
              improvements come together. Next.js now uses Server Components by
              default. The idea is no longer to do all the data fetching in the
              page and then drill down the data but for each component to be
              responsible for fetching its own data. The drawback with
              ServerComponents is that they do not handle state. If you need
              state handling you need to declare a component with "use-client"
              as a ClientComponent.
            </p>
            <p>
              With this React and Next.js position themselves as a full-stack
              framework.
            </p>
            <p>
              It looks alot what PHP and Ruby on Rails have done in the past.
              But it does so with 2 main differences:
            </p>
            <ol>
              <li>
                <strong>HTML streaming</strong>: Next.js &amp; React can stream
                HTML code to the client not only render it server-side
              </li>
              <li>
                <strong>Rendering on the edge</strong>: Next.js can render pages
                on the edge of the network. Rendering can be done not only on a
                centralized server but in a distributed network of servers
              </li>
            </ol>
            <p>
              <Image
                src='/server-client-components.png'
                alt='Identifying Server and Client components in Next.js 13'
                width={1442}
                height={1278}
              />
              {/* <img
              src='/public/server-client-components.png'
              alt='Identifying Server and Client components in Next.js 13'
              title='San Juan Mountains'
            /> */}
            </p>
          </div>
        </section>
      </div>
      <aside className='col-span-4'>
        <h2>Links</h2>
        <ul className='list'>
          <li>
            <a
              href='https://beta.nextjs.org/docs/rendering/fundamentals'
              target='_blank'
            >
              Rendering Fundamentals
            </a>
          </li>
          <li>
            <a
              href='https://beta.nextjs.org/docs/rendering/server-and-client-components'
              target='_blank'
            >
              Server and Client Components
            </a>
          </li>
          <li>
            <a href='https://edge-runtime.vercel.app/' target='_blank'>
              On the Edge
            </a>
          </li>
        </ul>
      </aside>
    </div>
  );
}
