import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';

@Injectable()

export class RoutingAuthentication implements CanActivate {
 canActivate() {
        return confirm("Are you show you want to open this component")
    }
}


