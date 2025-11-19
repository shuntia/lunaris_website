import type { Metadata } from "next";
import Hero from "./components/Hero";
import PageAnimations from "./components/PageAnimations";
import ScrollTop from "./components/ScrollTop";
import { inter, montserrat } from "./fonts";

export const metadata: Metadata = {
  title: "Lunaris",
  description:
    "Lunaris is a multimedia engine with a microkernel plugin architecture. Compose Rust plugins to build video editors, DAWs, animation tools, or entirely new creative software.",
  openGraph: {
    title: "Lunaris",
    description:
      "Build customized creative tools on top of a minimal Rust core. Add plugins for timelines, MIDI, animation, or your own domain-specific workflows.",
    url: "https://lunaris.shuntia.net",
    siteName: "Lunaris",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Lunaris",
    description:
      "Compose plugins to create video editors, DAWs, animation suites, or whatever creative tool you imagine.",
  },
};

const builds = [
  {
    title: "Video editor",
    description:
      "Add timeline, codecs, color tools, and export plugins to assemble a modern editor that you control end-to-end.",
    plugins: [
      "Timeline & sequencing",
      "GPU accelerated codecs",
      "Color grading nodes",
    ],
  },
  {
    title: "DAW / audio workstation",
    description:
      "Compose MIDI, DSP, and synth plugins to craft a DAW tailored to your workflow without the bloat.",
    plugins: ["MIDI routing", "Audio graph", "FX + instrument racks"],
  },
  {
    title: "Motion graphics suite",
    description:
      "Mix animation canvas, rigs, and simulation plugins for procedural motion design and VFX work.",
    plugins: ["Animation canvas", "Rigging layers", "Simulation kernels"],
  },
  {
    title: "Your own tool",
    description:
      "Prototype experimental creative software by composing only the primitives you need. Lunaris stays out of the way.",
    plugins: ["Custom UI", "Domain specific ops", "Shared plugin APIs"],
  },
];

const architecturePoints = [
  {
    title: "Microkernel core",
    detail:
      "Roughly 400 lines that handle GPU init (wgpu), ECS, scheduling, and messaging. Everything else is a plugin.",
  },
  {
    title: "Plugins define behavior",
    detail:
      "UI, codecs, tools, storage, and workflows live in plugins. Replace or fork them without touching the core.",
  },
  {
    title: "Compose like VSCode",
    detail:
      "Each plugin exports APIs that other plugins call directly. Compose them just like VSCode extensions or Emacs lisp.",
  },
  {
    title: "Static linking for speed",
    detail:
      "Plugins are Rust crates linked statically, so you keep type safety and zero-cost abstractions.",
  },
];

const developerHighlights = [
  "Write plugins in Rust with type-safe APIs and no virtual machine.",
  "Call other plugins directly—no black-box IPC or fragile scripting layers.",
  "Drop to native when needed: Metal, Vulkan, DX12 via wgpu boundaries.",
  "Ship cross-platform builds (Windows, macOS, Linux) from one codebase.",
];

const pluginSnippet = `use lunaris::prelude::*;

pub struct TimelinePlugin;

impl Plugin for TimelinePlugin {
    fn register(&self, registry: &mut PluginRegistry) {
        registry.register_tool("timeline", TimelineTool::new());
        registry.register_codec("h264", H264Codec::new());
    }
    fn name(&self) -> &str {
        "Timeline Plugin"
    }
    fn version(&self) -> &str {
        "0.1.0"
    }
    fn description(&self) -> &str {
        "Provides timeline and codec support for video editing."
    }
}
`;

const getStarted = [
  {
    title: "For power users",
    description:
      "Download Lunaris bundled with the video editor stack and start editing with a transparent pipeline.",
    actions: [
      {
        label: "Download build",
        href: "https://github.com/shuntia/lunaris/releases",
      },
    ],
  },
  {
    title: "For plugin developers",
    description:
      "Follow the ten-minute tutorial to write your first plugin and compose it with the existing stack.",
    actions: [
      {
        label: "Read tutorial",
        href: "https://github.com/shuntia/lunaris/tree/main/docs",
      },
      { label: "Open repo", href: "https://github.com/shuntia/lunaris" },
    ],
  },
];

export default function Home() {
  return (
    <main className={`text-[#FFFEED] ${inter.className}`}>
      <ScrollTop />
      <PageAnimations />
      <Hero />

      <section className="px-6 py-24" data-fade>
        <div className="mx-auto max-w-5xl space-y-6 text-center">
          <p
            className={`text-sm uppercase tracking-[0.3em] text-indigo-300 ${montserrat.className}`}
          >
            Platform-first
          </p>
          <h2 className="text-4xl font-semibold">
            Lunaris is a multimedia platform, not a finished product.
          </h2>
          <p className="text-lg text-indigo-100">
            Think VSCode for creative software. Install or write plugins to
            assemble the exact workflow you need: timelines, MIDI, simulation
            kernels, or a brand new domain entirely. The minimal core stays
            stable so plugins can evolve quickly.
          </p>
          <div className="grid gap-6 text-left md:grid-cols-3">
            <div className="rounded-2xl border border-indigo-900/40 bg-[#080414] p-6">
              <p className="text-sm uppercase tracking-wide text-indigo-300">
                Built in Rust
              </p>
              <p className="mt-3 text-base text-indigo-100">
                Microkernel core (~400 LOC) keeps the runtime predictable.
              </p>
            </div>
            <div className="rounded-2xl border border-indigo-900/40 bg-[#080414] p-6">
              <p className="text-sm uppercase tracking-wide text-indigo-300">
                Extensible
              </p>
              <p className="mt-3 text-base text-indigo-100">
                Add, remove, or swap plugins without forks or rewrites.
              </p>
            </div>
            <div className="rounded-2xl border border-indigo-900/40 bg-[#080414] p-6">
              <p className="text-sm uppercase tracking-wide text-indigo-300">
                Composable
              </p>
              <p className="mt-3 text-base text-indigo-100">
                Plugins expose APIs so other plugins can call into them
                directly.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-24" data-fade>
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 text-center">
            <p
              className={`text-sm uppercase tracking-[0.3em] text-emerald-300 ${montserrat.className}`}
            >
              What you can build
            </p>
            <h2 className="mt-4 text-4xl font-semibold">
              Add plugins and Lunaris becomes the tool you need.
            </h2>
            <p className="mt-3 text-lg text-indigo-100">
              Start from the minimal kernel, then mix and match plugins for your
              use case.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2">
            {builds.map((build) => (
              <div
                key={build.title}
                className="rounded-3xl border border-indigo-900/50 bg-gradient-to-br from-[#0B0520] to-[#050312] p-8 shadow-2xl shadow-black/30"
              >
                <h3 className="text-2xl font-semibold">{build.title}</h3>
                <p className="mt-4 text-base text-indigo-100">
                  {build.description}
                </p>
                <ul className="mt-6 space-y-2 text-sm text-indigo-200">
                  {build.plugins.map((plugin) => (
                    <li key={plugin} className="flex items-center gap-3">
                      <span className="h-2 w-2 rounded-full bg-emerald-400" />
                      {plugin}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-24" data-fade>
        <div className="mx-auto max-w-6xl grid gap-12 lg:grid-cols-2 lg:items-start">
          <div>
            <p
              className={`text-sm uppercase tracking-[0.3em] text-indigo-300 ${montserrat.className}`}
            >
              How it works
            </p>
            <h2 className="mt-4 text-4xl font-semibold">
              A microkernel with plugins that define every capability.
            </h2>
            <p className="mt-4 text-lg text-indigo-100">
              The Lunaris core only boots the engine, schedules jobs, and
              exposes GPU/device access. Everything else—UI, tools, codecs,
              physics—lives in plugins so you can swap implementations or keep
              experimental forks side-by-side.
            </p>
            <div className="mt-8 space-y-6">
              {architecturePoints.map((point) => (
                <div
                  key={point.title}
                  className="rounded-2xl border border-indigo-900/40 bg-[#080414] p-6"
                >
                  <h3 className="text-xl font-semibold">{point.title}</h3>
                  <p className="mt-2 text-base text-indigo-100">
                    {point.detail}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-3xl border border-indigo-900/50 bg-[#09031A] p-6 shadow-2xl shadow-black/40">
            <div className="mb-4 flex items-center justify-between text-sm text-indigo-300">
              <span>Plugin registration</span>
              <span>Rust</span>
            </div>
            <pre className="overflow-x-auto rounded-2xl bg-[#05010D] p-6 text-sm text-emerald-200">
              <code>{pluginSnippet}</code>
            </pre>
          </div>
        </div>
      </section>

      <section className="px-6 py-24" data-fade>
        <div className="mx-auto max-w-5xl text-center">
          <p
            className={`text-sm uppercase tracking-[0.3em] text-emerald-300 ${montserrat.className}`}
          >
            For developers
          </p>
          <h2 className="mt-4 text-4xl font-semibold">
            Built for systems programmers who care about extensibility.
          </h2>
          <div className="mt-10 grid gap-6 text-left md:grid-cols-2">
            {developerHighlights.map((point) => (
              <div
                key={point}
                className="rounded-2xl border border-emerald-500/20 bg-[#050814] p-6"
              >
                <div className="mb-3 h-1 w-12 rounded-full bg-emerald-400" />
                <p className="text-base text-indigo-100">{point}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-24" data-fade>
        <div className="mx-auto max-w-5xl text-center">
          <p
            className={`text-sm uppercase tracking-[0.3em] text-indigo-300 ${montserrat.className}`}
          >
            Get started
          </p>
          <h2 className="mt-4 text-4xl font-semibold">
            Choose your entry point.
          </h2>
        </div>
        <div className="mx-auto mt-12 grid max-w-5xl gap-8 md:grid-cols-2">
          {getStarted.map((card) => (
            <div
              key={card.title}
              className="flex flex-col rounded-3xl border border-indigo-900/40 bg-[#080414] p-8"
            >
              <h3 className="text-2xl font-semibold">{card.title}</h3>
              <p className="mt-4 text-base text-indigo-100">
                {card.description}
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                {card.actions.map((action) => (
                  <a
                    key={action.label}
                    href={action.href}
                    className="flex-1 rounded-full border border-indigo-200/60 px-6 py-3 text-center text-sm font-semibold text-indigo-100 transition hover:border-white hover:text-white"
                  >
                    {action.label}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
