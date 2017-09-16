import { PLATFORM } from 'aurelia-pal';

export class App {
    configureRouter(config, router) {
        //config.title = 'Malexion';
        config.map([
            { route: ['', 'home'], name: 'home', moduleId: PLATFORM.moduleName('./home'), nav: true, title: 'Home' },
            //{ route: 'aurelia-table', name: 'aurelia-table', moduleId: PLATFORM.moduleName('./aurelia-table/path'), nav: true, title: 'Aurelia Table' }
        ]);

        this.router = router;
    }
}
