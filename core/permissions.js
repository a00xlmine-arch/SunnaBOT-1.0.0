// Permission management module
module.exports = {
  hasPermission: (user, permission) => {
    // Check if user has required permission
    return user.permissions && user.permissions.includes(permission);
  },
  
  grantPermission: (user, permission) => {
    if (!user.permissions) user.permissions = [];
    if (!user.permissions.includes(permission)) {
      user.permissions.push(permission);
    }
  },
  
  revokePermission: (user, permission) => {
    if (user.permissions) {
      user.permissions = user.permissions.filter(p => p !== permission);
    }
  }
};
