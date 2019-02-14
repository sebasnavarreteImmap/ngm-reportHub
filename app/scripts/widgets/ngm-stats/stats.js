/* *
 * The MIT License
 *
 * Copyright (c) 2015, Patrick Fitzgerald
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */

angular.module('ngm.widget.stats', ['ngm.provider'])
  .config(function(dashboardProvider){
    dashboardProvider
      .widget('stats', {
        title: 'Statistics Panel',
        description: 'Displays a Key Statistical Indicator',
        controller: 'statsCtrl',
        templateUrl: '/scripts/widgets/ngm-stats/view.html',
        resolve: {
          // pass in ngmData for $http requests
          data: function(ngmData, config){
            if (config.request){
              return ngmData.get(config.request);
            }
          }
        }
      });
  })
  .controller('statsCtrl', [
    '$scope', 
    '$element',
    'data', 
    'config',
    function($scope, $element, data, config){
    
      // statistics widget default config
      $scope.stats = {
        title: 'Incidents',
        templateUrl: '/scripts/widgets/ngm-stats/template/default.html',
        element: $element,
        display: {
          iconClass: 'grey-text text-lighten-1',
          subTitleClass: 'grey-text text-darken-2',
          filter: 'number',
          duration: 1,
          simpleTitle: true
        },
        data: data
      };

      // Merge defaults with config
      $scope.stats = angular.merge({}, $scope.stats, config);

  }
]);


