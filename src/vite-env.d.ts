/// <reference types="vite/client" />

declare module "gsap-trial/SplitText" {
  export class SplitText {
    chars: Element[];
    words: Element[];
    lines: Element[];
    constructor(targets: unknown, vars?: Record<string, unknown>);
    revert(): void;
  }
}
