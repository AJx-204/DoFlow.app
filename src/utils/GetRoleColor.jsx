// utils/getRoleColor.js
export const GetRoleColor = (role) => {
  const roleColors = {
    admin: 'bg-red-500/10  border-red-500/30',
    moderator: 'bg-yellow-500/10  border-yellow-500/30',
    leader: 'bg-blue-500/10  border-blue-500/30',
    member: 'bg-green-500/10  border-green-500/30',
    viewer: 'bg-gray-400/10  border-gary-500/30',
  };

  return roleColors[role?.toLowerCase()] || 'bg-zinc-500 text-white';
};
