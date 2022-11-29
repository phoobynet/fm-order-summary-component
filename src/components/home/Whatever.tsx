export default function Whatever() {
  return (
    <div>
      <header>
        <ul className="mt-10 list-disc pl-6 text-2xl">
          <li>Vite</li>
          <li>React</li>
          <li>React Router DOM</li>
          <li>TypeScript</li>
          <li>ESLint</li>
          <li>Prettier - import order and Tailwind class ordering</li>
          <li>JS Standard-ish (you don&apos;t need semicolons sheeple!)</li>
          <li>
            <code>src</code> path is aliased as <code>@</code>
          </li>
          <li>Husky and lint-staged</li>
        </ul>
      </header>

      <main className="flex h-[250px] items-center justify-center">
        <div
          role="heading"
          aria-level={1}
          className="text-3xl font-bold tracking-wider"
        >
          Get to work!
        </div>
      </main>
    </div>
  )
}
