import { ApiGetUser, ApiSignIn } from "src/models/Auth";
import { useApi } from "./api";
import { ApiGetPermissions } from "src/models/Permission";
import { ApiGetGroup, ApiGetGroups } from "src/models/Group";
import { ApiGetEmployee, ApiGetEmployees } from "src/models/Employee";
import { ApiGetTask, ApiGetTasks } from "src/models/Task";

// Authentication
const signIn = async ({ email, password }: { email: string, password: string }) => {
    const response = await useApi<ApiSignIn>('auth/signin', 'POST', { email, password }, false);
    return response;
}

const getUser = async () => {
    const response = await useApi<ApiGetUser>('auth/user');
    return response;
}


// Groups / Permissions
const getPermissions = async () => {
    const response = await useApi<ApiGetPermissions>('companies/permissions');
    return response;
}

const getGroups = async () => {
    const response = await useApi<ApiGetGroups>('companies/groups');
    return response;
}

const getAnGroup = async (id: number) => {
    const response = await useApi<ApiGetGroup>(`companies/groups/${id}`);
    return response;
}

const addGroup = async ({ name, permissions }: { name: string, permissions: string }) => {
    const response = await useApi('companies/groups', 'POST', { name, permissions });
    return response;
}

const editGroup = async (id: number, { name, permissions }: { name?: string, permissions?: string }) => {
    const response = await useApi(`companies/groups/${id}`, 'PUT', { name, permissions });
    return response;
}

const deleteGroup = async (id: number) => {
    const response = await useApi(`companies/groups/${id}`, 'DELETE');
    return response;
}


// Employees
const getEmployees = async () => {
    const response = await useApi<ApiGetEmployees>('companies/employees');
    return response;
}

const getAnEmployee = async (id: number) => {
    const response = await useApi<ApiGetEmployee>(`companies/employees/${id}`);
    return response;
}

const addEmployee = async ({ name, email, password }: { name: string, email: string, password: string }) => {
    const response = await useApi('companies/employees', 'POST', { name, email, password });
    return response;
}

const editEmployee = async (id: number, { name, email, groups }: { name?: string, email?: string, groups: string }) => {
    const response = await useApi(`companies/employees/${id}`, 'PUT', { name, email, groups });
    return response;
}

const deleteEmployee = async (id: number) => {
    const response = await useApi(`companies/employees/${id}`, 'DELETE');
    return response;
}

// Tasks
const getTasks = async () => {
    const response = await useApi<ApiGetTasks>('companies/tasks');
    return response;
}

const getAnTask = async (id: number) => {
    const response = await useApi<ApiGetTask>(`companies/tasks/${id}`);
    return response;
}

const addTask = async(
    { title, description, due_date, employee_id, status_id }: { title: string, description?: string, due_date?: string, employee_id: number, status_id: number }
) => {
    const response = await useApi<ApiGetTask>('companies/tasks', 'POST', { title, description, due_date, employee_id, status_id });
    return response;
}

const editTask = async (
    id: number,
    { title, description, due_date, employee_id, status_id }: { title?: string, description?: string, due_date?: string, employee_id?: number, status_id?: number }
) => {
    const response = await useApi<ApiGetTask>(`companies/tasks/${id}`, 'PUT', { title, description, due_date, employee_id, status_id });
    return response;
}

const deleteTask = async (id: number) => {
    const response = await useApi(`companies/tasks/${id}`, 'DELETE');
    return response;
}


// Exporting all requests
export const useRequests = () => ({
    // Auth
    signIn,
    getUser,

    // Groups/ Permissions
    getPermissions,
    getGroups,
    getAnGroup,
    addGroup,
    editGroup,
    deleteGroup,

    // Employees
    getEmployees,
    getAnEmployee,
    addEmployee,
    editEmployee,
    deleteEmployee,

    // Tasks
    getTasks,
    getAnTask,
    addTask,
    editTask,
    deleteTask
});