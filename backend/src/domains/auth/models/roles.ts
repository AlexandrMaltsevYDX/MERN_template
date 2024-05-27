// db
export interface MRole {
  roleId?: number;
  roleName?: string;
}

export class RoleModel implements MRole {
  roleId?: number;
  roleName?: string;
  constructor(roleId?: number, roleName?: string) {
    this.roleId = roleId;
    this.roleName = roleName;
  }
}
