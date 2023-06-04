import { Inject } from "@nestjs/common";
import { UpdateThemeIPInputDto, UpdateThemeIPOutputDto, UpdateThemeInboundPort } from "../inbound-port/update-theme.inbound-port";
import { UPDATE_THEME_OUTBOUND_PORT, UpdateThemeOutboundPort } from "../outbound-port/update-theme.outbound-port";

export class UpdateThemeService implements UpdateThemeInboundPort{
    constructor(
        @Inject(UPDATE_THEME_OUTBOUND_PORT)
        private readonly updateThemeOutboundPort : UpdateThemeOutboundPort
    ){}

    async update(params : UpdateThemeIPInputDto) : Promise<UpdateThemeIPOutputDto>{
        return this.updateThemeOutboundPort.update(params);
    }
}
