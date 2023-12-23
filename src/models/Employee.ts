import { Group } from "./Group";

export type Employee = {
    id: number;
    name: string;
    email: string;
}

export type EmployeeDetail = Employee & {
    groups: Group[]
}

export type ApiGetEmployees = {
    employees: Employee[]
}

export type ApiGetEmployee = EmployeeDetail;