const User_Profile = require(`./user_profile`);
const Branches = require(`./branches`);
const Floors = require(`./floors`);
const Workspaces = require(`./workspaces`);

Branches.hasMany(Floors);
Floors.belongsTo(Branches);

Branches.hasMany(User_Profile);
User_Profile.belongsTo(Branches);

Floors.hasMany(Workspaces);
Workspaces.belongsTo(Floors);

Workspaces.hasOne(User_Profile);
User_Profile.belongsTo(Workspaces);

module.exports = {
  User_Profile: User_Profile,
  Branches: Branches,
  Floors: Floors,
  Workspaces: Workspaces,
};
