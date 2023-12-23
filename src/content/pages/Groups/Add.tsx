import { PermissionMiddleware } from "src/middlewares/PermissionMiddleware"
import { PermissionDetail } from "src/models/Permission";
import { useRequests } from "src/utils/requests";
import { useState, useEffect } from 'react';
import { Helmet } from "react-helmet-async";
import { LinearProgress, Snackbar, Container, Stack, TextField, Button } from '@mui/material';
import PageTitleWrapper from "src/components/PageTitleWrapper";
import PageTitle from "src/components/PageTitle";
import { useNavigate } from "react-router";
import PermissionsList from "src/components/PermissionsList";

const AddGroup = () => {
    const [requestLoading, setRequestLoading] = useState(true);
    const [infoMessage, setInfoMessage] = useState('');
    const [nameInput, setNameInput] = useState('');
    const [permissionsData, setPermissionsData] = useState<PermissionDetail[]>([]);
    const [selectedPermissions, setSelectedPermissions] = useState<number[]>([]);

    const navigate = useNavigate();

    const { getPermissions, addGroup } = useRequests();

    const handleGetPermissions = async () => {
        const response = await getPermissions();

        if (!response.detail) {
            setPermissionsData(response.data.permissions);
        }
    }

    const handleAdd = async () => {
        const name = nameInput;
        const permissions = selectedPermissions.join(',');

        if (!name) {
            setInfoMessage('Preencha todos os campos');
            return;
        }

        setRequestLoading(true);
        const response = await addGroup({ name, permissions });
        setRequestLoading(false);

        if (response.detail) {
            setInfoMessage(response.detail);
        } else {
            navigate('/groups');
        }
    }

    useEffect(() => {
        Promise.resolve(handleGetPermissions()).finally(() => {
            setRequestLoading(false)
        });
    }, [])

    return (
        <PermissionMiddleware codeName="add_group">
            <Helmet>
                <title>Adicionar um cargo</title>
            </Helmet>

            {requestLoading && <LinearProgress sx={{ height: 2 }} color="primary" />}

            <PageTitleWrapper>
                <PageTitle
                    heading="Adicionar um Cargo"
                    subHeading="Adicione um cargo e defina nome, permissões e etc"
                />

            </PageTitleWrapper>

            <Snackbar
                open={infoMessage != ''}
                onClose={() => setInfoMessage('')}
                anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
                message={infoMessage}
            />

            <Container maxWidth="lg">
                <Stack maxWidth={700} spacing={3}>
                    <TextField
                        fullWidth
                        label="Nome *"
                        value={nameInput}
                        onChange={e => setNameInput(e.target.value)}
                    />

                    <PermissionsList
                        permissionsData={permissionsData}
                        selectedPermissions={selectedPermissions}
                        setSelectedPermissions={setSelectedPermissions}
                    />

                    <Button
                        variant="outlined"
                        sx={{ width: 90, mt: 3 }}
                        onClick={requestLoading ? () => null : handleAdd}
                        disabled={requestLoading}
                    >
                        Adicionar
                    </Button>
                </Stack>
            </Container>
        </PermissionMiddleware>
    )
}

export default AddGroup;