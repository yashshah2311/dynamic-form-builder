// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  envName: 'local',
  auth: {
    protocol: 'http',
    port: '3001',
    apiPrefix: '/api',
    resourcelogin: '/login',
    genericChangePassword: '/changePassword',
    genericForgotPassword: '/forgotPassword',
    updateProfileDetails: '/resource/:resource_id',
    saveUserSession: '/save/user/session',
    updateUserSession: '/update/user/session',
    fetchUserRole: '/user/role/:user_code',
    getProfileDataByResourceId: '/resource/profile/:resource_id',
    addClientHirerUser: '/resource/add/client/user/:resource_id/legal/entityId/:legal_entity_id'
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
