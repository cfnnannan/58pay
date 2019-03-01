/**
 *  Charts Custom fields(Allow expansion)
 *  https://valor-software.com/ng2-charts/
 */
export interface ChartsOptions
{
    Type?: string;
    Legend?: boolean;
    Options?: any;
    Labels?: Array<any>;
    Colors?: Array<any>;
    Width?: Array<any>;
    Data?: any[];
    HandlerClicked?: (e: any) => void;
    HandlerHovered?: (e: any) => void;
}

export interface ProFitsOptions
{
    barWidth: string;
    close: boolean;
    month: string;
    total: number;
    data: Array<Object>;
}

export interface DomChartPanelOptions
{
    IsShow?: boolean;
    Height?: number;
    Top?: number;
}


/* request for login */

export interface IUserAuthorize
{
    Tel?: number;
    Password?: string;
}

/** response for Token only */

export interface ITokenResponse
{
    Token: string;
}
