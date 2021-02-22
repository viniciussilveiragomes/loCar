
export interface Veiculo {
    id: number;
    marca: string;
    modelo: string;
    placa: string;
}

export interface ResponseVeiculo {
    page: number;
    per_page: number;
    total: number;
    total_pages: number;
    data: Veiculo[];
}



