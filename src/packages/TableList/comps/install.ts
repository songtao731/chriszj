import type { App, Component } from 'vue';

interface EventShim {
  new (...args: any[]): {
    $props: {
      onClick?: (...args: any[]) => void
    }
  }
}

export type WithInstall<T> = T & {
  install(app: App): void
} & EventShim;

export type WithInstallAndUse<T, Use> = T & {
  install(app: App): void
  use: Use
} & EventShim;

export function withInstall<T extends Component>(options: T): WithInstall<T>;
export function withInstall<T extends Component, Use extends Function>(
  options: T,
  use: Use
): WithInstallAndUse<T, Use>;
export function withInstall<T extends Component, Use extends Function>(
  options: T,
  use?: Use
) {
  (options as Record<string, unknown>).install = (app: App) => {
    const { name } = options;
    if (name) {
      app.component(name, options);
    }
  };
  if (use && typeof use === 'function') {
    (options as Record<string, unknown>).use = use;
    return options as WithInstallAndUse<T, Use>;
  }
  return options as WithInstall<T>;
}
