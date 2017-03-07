/**
 * Forge SDK
 * The Forge Platform contains an expanding collection of web service components that can be used with Autodesk cloud-based products or your own technologies. Take advantage of Autodesk’s expertise in design and engineering.
 *
 * OpenAPI spec version: 0.1.0
 * Contact: forge.help@autodesk.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */


module.exports = (function() {
   'use strict';

   var ApiClient = require('../ApiClient'),
       Bucket = require('../model/Bucket'),
       Buckets = require('../model/Buckets'),
       PostBucketsPayload = require('../model/PostBucketsPayload'),
       Reason = require('../model/Reason');

  /**
   * Buckets service.
   * @module api/BucketsApi
   * @version 0.3.0
   */

  /**
   * Constructs a new BucketsApi. 
   * @alias module:api/BucketsApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;



    /**
     * Use this endpoint to create a bucket. Buckets are arbitrary spaces created and owned by applications. Bucket keys are globally unique across all regions, regardless of where they were created, and they cannot be changed. The application creating the bucket is the owner of the bucket. 
     * @param {module:model/PostBucketsPayload} postBuckets Body Structure
     * @param {Object} opts Optional parameters
     * @param {module:model/String} opts.xAdsRegion The region where the bucket resides Acceptable values: `US`, `EMEA` Default is `US`  (default to US)
     * data is of type: {module:model/Bucket}
     * @param {Object} oauth2client oauth2client for the call
     * @param {Object} credentials credentials for the call
     */
    this.createBucket = function(postBuckets, opts, oauth2client, credentials) {
      opts = opts || {};
      var postBody = postBuckets;

      // verify the required parameter 'postBuckets' is set
      if (postBuckets == undefined || postBuckets == null) {
        return Promise.reject("Missing the required parameter 'postBuckets' when calling createBucket");
      }


      var pathParams = {
      };
      var queryParams = {
      };
      var headerParams = {
        'x-ads-region': opts['xAdsRegion']
      };
      var formParams = {
      };

      var contentTypes = ['application/json'];
      var accepts = ['application/vnd.api+json', 'application/json'];
      var returnType = Bucket;

      return this.apiClient.callApi(
        '/oss/v2/buckets', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        contentTypes, accepts, returnType, oauth2client, credentials
      );
    };


    /**
     * This endpoint will delete a bucket. 
     * @param {String} bucketKey URL-encoded bucket key
     * @param {Object} oauth2client oauth2client for the call
     * @param {Object} credentials credentials for the call
     */
    this.deleteBucket = function(bucketKey, oauth2client, credentials) {
      var postBody = null;

      // verify the required parameter 'bucketKey' is set
      if (bucketKey == undefined || bucketKey == null) {
        return Promise.reject("Missing the required parameter 'bucketKey' when calling deleteBucket");
      }


      var pathParams = {
        'bucketKey': bucketKey
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var contentTypes = ['application/json'];
      var accepts = ['application/vnd.api+json', 'application/json'];
      var returnType = null;

      return this.apiClient.callApi(
        '/oss/v2/buckets/{bucketKey}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        contentTypes, accepts, returnType, oauth2client, credentials
      );
    };


    /**
     * This endpoint will return the buckets owned by the application. This endpoint supports pagination.
     * @param {String} bucketKey URL-encoded bucket key
     * data is of type: {module:model/Bucket}
     * @param {Object} oauth2client oauth2client for the call
     * @param {Object} credentials credentials for the call
     */
    this.getBucketDetails = function(bucketKey, oauth2client, credentials) {
      var postBody = null;

      // verify the required parameter 'bucketKey' is set
      if (bucketKey == undefined || bucketKey == null) {
        return Promise.reject("Missing the required parameter 'bucketKey' when calling getBucketDetails");
      }


      var pathParams = {
        'bucketKey': bucketKey
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var contentTypes = ['application/json'];
      var accepts = ['application/vnd.api+json', 'application/json'];
      var returnType = Bucket;

      return this.apiClient.callApi(
        '/oss/v2/buckets/{bucketKey}/details', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        contentTypes, accepts, returnType, oauth2client, credentials
      );
    };


    /**
     * This endpoint will return the buckets owned by the application. This endpoint supports pagination. 
     * @param {Object} opts Optional parameters
     * @param {module:model/String} opts.region The region where the bucket resides Acceptable values: `US`, `EMEA` Default is `US`  (default to US)
     * @param {Integer} opts.limit Limit to the response size, Acceptable values: 1-100 Default = 10  (default to 10)
     * @param {String} opts.startAt Key to use as an offset to continue pagination This is typically the last bucket key found in a preceding GET buckets response 
     * data is of type: {module:model/Buckets}
     * @param {Object} oauth2client oauth2client for the call
     * @param {Object} credentials credentials for the call
     */
    this.getBuckets = function(opts, oauth2client, credentials) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'region': opts['region'],
        'limit': opts['limit'],
        'startAt': opts['startAt']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var contentTypes = ['application/json'];
      var accepts = ['application/vnd.api+json', 'application/json'];
      var returnType = Buckets;

      return this.apiClient.callApi(
        '/oss/v2/buckets', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        contentTypes, accepts, returnType, oauth2client, credentials
      );
    };
  };

  return exports;
}());
