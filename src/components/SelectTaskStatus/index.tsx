import {
    FormControl,
    InputLabel,
    Select,
    MenuItem
} from '@mui/material';

type Props = {
    selectedStatus: number;
    setSelectedStatus: (status_id: number) => void;
}

const SelectTaskStatus = ({ selectedStatus, setSelectedStatus }: Props) => {
    return (
        <FormControl fullWidth>
            <InputLabel>Selecione um Status</InputLabel>
            <Select
                value={selectedStatus}
                label="Selecione um Status"
                onChange={e => setSelectedStatus(+e.target.value)}
            >
                <MenuItem value={1}>Não Iniciado</MenuItem>
                <MenuItem value={2}>Em Andamento</MenuItem>
                <MenuItem value={3}>Feito</MenuItem>
            </Select>
        </FormControl>
    )
}

export default SelectTaskStatus;