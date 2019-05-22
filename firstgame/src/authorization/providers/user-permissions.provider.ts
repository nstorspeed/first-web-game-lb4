import {Provider} from '@loopback/context';
import {PermissionKey} from '../permission-key';
import {UserPermissionsFn} from '../types';
import {intersection} from 'lodash';

export class UserPermissionsProvider implements Provider<UserPermissionsFn> {
  constructor() {}

  value(): UserPermissionsFn {
    return (userPermissions, requiredPermissions) =>
      this.action(userPermissions, requiredPermissions);
  }

  action(
    userPermissions: PermissionKey[],
    requiredPermissions: PermissionKey[],
  ): boolean {
    return intersection(userPermissions, requiredPermissions).length
          === requiredPermissions.length;
  }
}
