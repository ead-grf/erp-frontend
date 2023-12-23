export type Permission = {
    id: number;
    label: string;
    codename: string;
}

export type PermissionDetail = {
    id: number;
    name: string;
    codename: string;
}

export type ApiGetPermissions = {
    permissions: PermissionDetail[]
}