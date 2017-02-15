'use strict';

angular.module('stockCatApp')
  .service('CompanyService', function CompanyService($resource) {
    return $resource('companies.json');
  });
