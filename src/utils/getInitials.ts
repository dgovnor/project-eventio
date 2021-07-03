export const getInitials = (name: string) => {
  if (!name) {
    return ''
  }
    let initials = '';
    const nameSplit = name.split(' ');
    const nameLength = nameSplit.length;
    if (nameLength > 1) {
      initials = nameSplit[0].substring(0, 1)
      + nameSplit[nameLength - 1].substring(0, 1);
    } else if (nameLength === 1) {
      initials = nameSplit[0].substring(0, 1);
    }
    return initials.toUpperCase();
  }