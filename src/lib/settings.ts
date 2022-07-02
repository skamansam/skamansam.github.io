import ConfigFile from '../settings.json';

const Settings = new Proxy(ConfigFile, {
  get(obj: ConfigFile, property: string, _receiver) {
    if (property === 'default_image' && !obj?.default_image?.startsWith('http')) {
      return `${obj?.base_url}${obj.default_image}`;
    }
    // if (obj?.[property]) return obj[property];
    return Reflect.get(...arguments);
  },
});

export default Settings;