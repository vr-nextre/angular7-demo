export class ConfigService {
  theme = 'dark';

  setTheme(value: string) {
    this.theme = value;
  }
}
