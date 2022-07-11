import ConfigFile from '../settings.json';

const Settings:ConfigFile = new Proxy(ConfigFile, {
  get(obj: ConfigFile, property: string, _receiver) {
    if (property === 'site.posts.default_image' && !obj?.posts?.default_image?.startsWith('http')) {
      return `${obj?.base_url}${obj.posts.default_image}`;
    }
    // if (obj?.[property]) return obj[property];
    return Reflect.get(obj, property, _receiver);
  },
});

export default Settings;