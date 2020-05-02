import incstr from 'incstr';

export const uniqueIdGeneratorFactory = () => {
  const index: Record<string, string> = {};

  const generateNextId = incstr.idGenerator({
    // Removed "d" letter to avoid accidental "ad" construct.
    // @see https://medium.com/@mbrevda/just-make-sure-ad-isnt-being-used-as-a-class-name-prefix-or-you-might-suffer-the-wrath-of-the-558d65502793
    alphabet: 'abcefghijklmnopqrstuvwxyz0123456789',
  });

  return (name: string) => {
    if (index[name]) return index[name];

    let nextId = generateNextId();

    while (/^[0-9]/.test(nextId)) {
      // Class name cannot start with a number.
      nextId = generateNextId();
    }

    index[name] = nextId;

    return index[name];
  };
};
