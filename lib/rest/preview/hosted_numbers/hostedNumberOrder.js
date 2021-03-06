'use strict';

/* jshint ignore:start */
/**
 * This code was generated by
 * \ / _    _  _|   _  _
 *  | (_)\/(_)(_|\/| |(/_  v1.0.0
 *       /       /
 */
/* jshint ignore:end */

var Q = require('q');  /* jshint ignore:line */
var _ = require('lodash');  /* jshint ignore:line */
var Page = require('../../../base/Page');  /* jshint ignore:line */
var deserialize = require(
    '../../../base/deserialize');  /* jshint ignore:line */
var serialize = require('../../../base/serialize');  /* jshint ignore:line */
var values = require('../../../base/values');  /* jshint ignore:line */

var HostedNumberOrderList;
var HostedNumberOrderPage;
var HostedNumberOrderInstance;
var HostedNumberOrderContext;

/* jshint ignore:start */
/**
 * @constructor Twilio.Preview.HostedNumbers.HostedNumberOrderList
 * @description Initialize the HostedNumberOrderList
 * PLEASE NOTE that this class contains preview products that are subject to change. Use them with caution. If you currently do not have developer preview access, please contact help@twilio.com.
 *
 * @param {Twilio.Preview.HostedNumbers} version - Version of the resource
 */
/* jshint ignore:end */
HostedNumberOrderList = function HostedNumberOrderList(version) {
  /* jshint ignore:start */
  /**
   * @function hostedNumberOrders
   * @memberof Twilio.Preview.HostedNumbers
   * @instance
   *
   * @param {string} sid - sid of instance
   *
   * @returns {Twilio.Preview.HostedNumbers.HostedNumberOrderContext}
   */
  /* jshint ignore:end */
  function HostedNumberOrderListInstance(sid) {
    return HostedNumberOrderListInstance.get(sid);
  }

  HostedNumberOrderListInstance._version = version;
  // Path Solution
  HostedNumberOrderListInstance._solution = {};
  HostedNumberOrderListInstance._uri = _.template(
    '/HostedNumberOrders' // jshint ignore:line
  )(HostedNumberOrderListInstance._solution);
  /* jshint ignore:start */
  /**
   * Streams HostedNumberOrderInstance records from the API.
   *
   * This operation lazily loads records as efficiently as possible until the limit
   * is reached.
   *
   * The results are passed into the callback function, so this operation is memory efficient.
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @function each
   * @memberof Twilio.Preview.HostedNumbers.HostedNumberOrderList
   * @instance
   *
   * @param {object|function} opts - ...
   * @param {hosted_number_order.status} [opts.status] -
   *          The Status of this HostedNumberOrder.
   * @param {string} [opts.phoneNumber] - An E164 formatted phone number.
   * @param {string} [opts.incomingPhoneNumberSid] - IncomingPhoneNumber sid.
   * @param {string} [opts.friendlyName] -
   *          A human readable description of this resource.
   * @param {string} [opts.uniqueName] -
   *          A unique, developer assigned name of this HostedNumberOrder.
   * @param {number} [opts.limit] -
   *         Upper limit for the number of records to return.
   *         each() guarantees never to return more than limit.
   *         Default is no limit
   * @param {number} [opts.pageSize=50] -
   *         Number of records to fetch per request,
   *         when not set will use the default value of 50 records.
   *         If no pageSize is defined but a limit is defined,
   *         each() will attempt to read the limit with the most efficient
   *         page size, i.e. min(limit, 1000)
   * @param {Function} [opts.callback] -
   *         Function to process each record. If this and a positional
   * callback are passed, this one will be used
   * @param {Function} [opts.done] -
   *          Function to be called upon completion of streaming
   * @param {Function} [callback] - Function to process each record
   */
  /* jshint ignore:end */
  HostedNumberOrderListInstance.each = function each(opts, callback) {
    opts = opts || {};
    if (_.isFunction(opts)) {
      opts = { callback: opts };
    } else if (_.isFunction(callback) && !_.isFunction(opts.callback)) {
      opts.callback = callback;
    }

    if (_.isUndefined(opts.callback)) {
      throw new Error('Callback function must be provided');
    }

    var done = false;
    var currentPage = 1;
    var currentResource = 0;
    var limits = this._version.readLimits({
      limit: opts.limit,
      pageSize: opts.pageSize
    });

    function onComplete(error) {
      done = true;
      if (_.isFunction(opts.done)) {
        opts.done(error);
      }
    }

    function fetchNextPage(fn) {
      var promise = fn();
      if (_.isUndefined(promise)) {
        onComplete();
        return;
      }

      promise.then(function(page) {
        _.each(page.instances, function(instance) {
          if (done || (!_.isUndefined(opts.limit) && currentResource >= opts.limit)) {
            done = true;
            return false;
          }

          currentResource++;
          opts.callback(instance, onComplete);
        });

        if ((limits.pageLimit && limits.pageLimit <= currentPage)) {
          onComplete();
        } else if (!done) {
          currentPage++;
          fetchNextPage(_.bind(page.nextPage, page));
        }
      });

      promise.catch(onComplete);
    }

    fetchNextPage(_.bind(this.page, this, _.merge(opts, limits)));
  };

  /* jshint ignore:start */
  /**
   * @description Lists HostedNumberOrderInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @function list
   * @memberof Twilio.Preview.HostedNumbers.HostedNumberOrderList
   * @instance
   *
   * @param {object|function} opts - ...
   * @param {hosted_number_order.status} [opts.status] -
   *          The Status of this HostedNumberOrder.
   * @param {string} [opts.phoneNumber] - An E164 formatted phone number.
   * @param {string} [opts.incomingPhoneNumberSid] - IncomingPhoneNumber sid.
   * @param {string} [opts.friendlyName] -
   *          A human readable description of this resource.
   * @param {string} [opts.uniqueName] -
   *          A unique, developer assigned name of this HostedNumberOrder.
   * @param {number} [opts.limit] -
   *         Upper limit for the number of records to return.
   *         list() guarantees never to return more than limit.
   *         Default is no limit
   * @param {number} [opts.pageSize] -
   *         Number of records to fetch per request,
   *         when not set will use the default value of 50 records.
   *         If no page_size is defined but a limit is defined,
   *         list() will attempt to read the limit with the most
   *         efficient page size, i.e. min(limit, 1000)
   * @param {function} [callback] - Callback to handle list of records
   *
   * @returns {Promise} Resolves to a list of records
   */
  /* jshint ignore:end */
  HostedNumberOrderListInstance.list = function list(opts, callback) {
    if (_.isFunction(opts)) {
      callback = opts;
      opts = {};
    }
    opts = opts || {};
    var deferred = Q.defer();
    var allResources = [];
    opts.callback = function(resource, done) {
      allResources.push(resource);

      if (!_.isUndefined(opts.limit) && allResources.length === opts.limit) {
        done();
      }
    };

    opts.done = function(error) {
      if (_.isUndefined(error)) {
        deferred.resolve(allResources);
      } else {
        deferred.reject(error);
      }
    };

    if (_.isFunction(callback)) {
      deferred.promise.nodeify(callback);
    }

    this.each(opts);
    return deferred.promise;
  };

  /* jshint ignore:start */
  /**
   * Retrieve a single page of HostedNumberOrderInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @function page
   * @memberof Twilio.Preview.HostedNumbers.HostedNumberOrderList
   * @instance
   *
   * @param {object|function} opts - ...
   * @param {hosted_number_order.status} [opts.status] -
   *          The Status of this HostedNumberOrder.
   * @param {string} [opts.phoneNumber] - An E164 formatted phone number.
   * @param {string} [opts.incomingPhoneNumberSid] - IncomingPhoneNumber sid.
   * @param {string} [opts.friendlyName] -
   *          A human readable description of this resource.
   * @param {string} [opts.uniqueName] -
   *          A unique, developer assigned name of this HostedNumberOrder.
   * @param {string} [opts.pageToken] - PageToken provided by the API
   * @param {number} [opts.pageNumber] -
   *          Page Number, this value is simply for client state
   * @param {number} [opts.pageSize] - Number of records to return, defaults to 50
   * @param {function} [callback] - Callback to handle list of records
   *
   * @returns {Promise} Resolves to a list of records
   */
  /* jshint ignore:end */
  HostedNumberOrderListInstance.page = function page(opts, callback) {
    if (_.isFunction(opts)) {
      callback = opts;
      opts = {};
    }
    opts = opts || {};

    var deferred = Q.defer();
    var data = values.of({
      'Status': _.get(opts, 'status'),
      'PhoneNumber': _.get(opts, 'phoneNumber'),
      'IncomingPhoneNumberSid': _.get(opts, 'incomingPhoneNumberSid'),
      'FriendlyName': _.get(opts, 'friendlyName'),
      'UniqueName': _.get(opts, 'uniqueName'),
      'PageToken': opts.pageToken,
      'Page': opts.pageNumber,
      'PageSize': opts.pageSize
    });

    var promise = this._version.page({uri: this._uri, method: 'GET', params: data});

    promise = promise.then(function(payload) {
      deferred.resolve(new HostedNumberOrderPage(this._version, payload, this._solution));
    }.bind(this));

    promise.catch(function(error) {
      deferred.reject(error);
    });

    if (_.isFunction(callback)) {
      deferred.promise.nodeify(callback);
    }

    return deferred.promise;
  };

  /* jshint ignore:start */
  /**
   * Retrieve a single target page of HostedNumberOrderInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @function getPage
   * @memberof Twilio.Preview.HostedNumbers.HostedNumberOrderList
   * @instance
   *
   * @param {hosted_number_order.status} [opts.status] -
   *          The Status of this HostedNumberOrder.
   * @param {string} [opts.phoneNumber] - An E164 formatted phone number.
   * @param {string} [opts.incomingPhoneNumberSid] - IncomingPhoneNumber sid.
   * @param {string} [opts.friendlyName] -
   *          A human readable description of this resource.
   * @param {string} [opts.uniqueName] -
   *          A unique, developer assigned name of this HostedNumberOrder.
   * @param {string} [targetUrl] - API-generated URL for the requested results page
   * @param {function} [callback] - Callback to handle list of records
   *
   * @returns {Promise} Resolves to a list of records
   */
  /* jshint ignore:end */
  HostedNumberOrderListInstance.getPage = function getPage(targetUrl, callback) {
    var deferred = Q.defer();

    var promise = this._version._domain.twilio.request({method: 'GET', uri: targetUrl});

    promise = promise.then(function(payload) {
      deferred.resolve(new HostedNumberOrderPage(this._version, payload, this._solution));
    }.bind(this));

    promise.catch(function(error) {
      deferred.reject(error);
    });

    if (_.isFunction(callback)) {
      deferred.promise.nodeify(callback);
    }

    return deferred.promise;
  };

  /* jshint ignore:start */
  /**
   * create a HostedNumberOrderInstance
   *
   * @function create
   * @memberof Twilio.Preview.HostedNumbers.HostedNumberOrderList
   * @instance
   *
   * @param {object} opts - ...
   * @param {string} opts.phoneNumber - An E164 formatted phone number.
   * @param {boolean} opts.smsCapability - Specify SMS capability to host.
   * @param {string} [opts.accountSid] - Account Sid.
   * @param {string} [opts.friendlyName] -
   *          A human readable description of this resource.
   * @param {string} [opts.uniqueName] -
   *          A unique, developer assigned name of this HostedNumberOrder.
   * @param {string|list} [opts.ccEmails] - A list of emails.
   * @param {string} [opts.smsUrl] - SMS URL.
   * @param {string} [opts.smsMethod] - SMS Method.
   * @param {string} [opts.smsFallbackUrl] - SMS Fallback URL.
   * @param {string} [opts.smsFallbackMethod] - SMS Fallback Method.
   * @param {string} [opts.statusCallbackUrl] - Status Callback URL.
   * @param {string} [opts.statusCallbackMethod] - Status Callback Method.
   * @param {string} [opts.smsApplicationSid] - SMS Application Sid.
   * @param {string} [opts.addressSid] - Address sid.
   * @param {string} [opts.email] - Email.
   * @param {function} [callback] - Callback to handle processed record
   *
   * @returns {Promise} Resolves to processed HostedNumberOrderInstance
   */
  /* jshint ignore:end */
  HostedNumberOrderListInstance.create = function create(opts, callback) {
    if (_.isUndefined(opts)) {
      throw new Error('Required parameter "opts" missing.');
    }
    if (_.isUndefined(opts.phoneNumber)) {
      throw new Error('Required parameter "opts.phoneNumber" missing.');
    }
    if (_.isUndefined(opts.smsCapability)) {
      throw new Error('Required parameter "opts.smsCapability" missing.');
    }

    var deferred = Q.defer();
    var data = values.of({
      'PhoneNumber': _.get(opts, 'phoneNumber'),
      'SmsCapability': serialize.bool(_.get(opts, 'smsCapability')),
      'AccountSid': _.get(opts, 'accountSid'),
      'FriendlyName': _.get(opts, 'friendlyName'),
      'UniqueName': _.get(opts, 'uniqueName'),
      'CcEmails': serialize.map(_.get(opts, 'ccEmails'), function(e) { return e; }),
      'SmsUrl': _.get(opts, 'smsUrl'),
      'SmsMethod': _.get(opts, 'smsMethod'),
      'SmsFallbackUrl': _.get(opts, 'smsFallbackUrl'),
      'SmsFallbackMethod': _.get(opts, 'smsFallbackMethod'),
      'StatusCallbackUrl': _.get(opts, 'statusCallbackUrl'),
      'StatusCallbackMethod': _.get(opts, 'statusCallbackMethod'),
      'SmsApplicationSid': _.get(opts, 'smsApplicationSid'),
      'AddressSid': _.get(opts, 'addressSid'),
      'Email': _.get(opts, 'email')
    });

    var promise = this._version.create({uri: this._uri, method: 'POST', data: data});

    promise = promise.then(function(payload) {
      deferred.resolve(new HostedNumberOrderInstance(this._version, payload, this._solution.sid));
    }.bind(this));

    promise.catch(function(error) {
      deferred.reject(error);
    });

    if (_.isFunction(callback)) {
      deferred.promise.nodeify(callback);
    }

    return deferred.promise;
  };

  /* jshint ignore:start */
  /**
   * Constructs a hosted_number_order
   *
   * @function get
   * @memberof Twilio.Preview.HostedNumbers.HostedNumberOrderList
   * @instance
   *
   * @param {string} sid - HostedNumberOrder sid.
   *
   * @returns {Twilio.Preview.HostedNumbers.HostedNumberOrderContext}
   */
  /* jshint ignore:end */
  HostedNumberOrderListInstance.get = function get(sid) {
    return new HostedNumberOrderContext(this._version, sid);
  };

  return HostedNumberOrderListInstance;
};


/* jshint ignore:start */
/**
 * @constructor Twilio.Preview.HostedNumbers.HostedNumberOrderPage
 * @augments Page
 * @description Initialize the HostedNumberOrderPage
 * PLEASE NOTE that this class contains preview products that are subject to change. Use them with caution. If you currently do not have developer preview access, please contact help@twilio.com.
 *
 * @param {Twilio.Preview.HostedNumbers} version - Version of the resource
 * @param {object} response - Response from the API
 * @param {object} solution - Path solution
 *
 * @returns HostedNumberOrderPage
 */
/* jshint ignore:end */
HostedNumberOrderPage = function HostedNumberOrderPage(version, response,
                                                        solution) {
  // Path Solution
  this._solution = solution;

  Page.prototype.constructor.call(this, version, response, this._solution);
};

_.extend(HostedNumberOrderPage.prototype, Page.prototype);
HostedNumberOrderPage.prototype.constructor = HostedNumberOrderPage;

/* jshint ignore:start */
/**
 * Build an instance of HostedNumberOrderInstance
 *
 * @function getInstance
 * @memberof Twilio.Preview.HostedNumbers.HostedNumberOrderPage
 * @instance
 *
 * @param {object} payload - Payload response from the API
 *
 * @returns HostedNumberOrderInstance
 */
/* jshint ignore:end */
HostedNumberOrderPage.prototype.getInstance = function getInstance(payload) {
  return new HostedNumberOrderInstance(this._version, payload);
};


/* jshint ignore:start */
/**
 * @constructor Twilio.Preview.HostedNumbers.HostedNumberOrderInstance
 * @description Initialize the HostedNumberOrderContext
 * PLEASE NOTE that this class contains preview products that are subject to change. Use them with caution. If you currently do not have developer preview access, please contact help@twilio.com.
 *
 * @property {string} sid - HostedNumberOrder sid.
 * @property {string} accountSid - Account Sid.
 * @property {string} incomingPhoneNumberSid - IncomingPhoneNumber sid.
 * @property {string} addressSid - Address sid.
 * @property {string} signingDocumentSid - LOA document sid.
 * @property {string} phoneNumber - An E164 formatted phone number.
 * @property {string} capabilities - A mapping of phone number capabilities.
 * @property {string} friendlyName - A human readable description of this resource.
 * @property {string} uniqueName -
 *          A unique, developer assigned name of this HostedNumberOrder.
 * @property {hosted_number_order.status} status -
 *          The Status of this HostedNumberOrder.
 * @property {Date} dateCreated - The date this HostedNumberOrder was created.
 * @property {Date} dateUpdated - The date this HostedNumberOrder was updated.
 * @property {number} verificationAttempts -
 *          The number of verification attempts made to verify ownership of the phone number.
 * @property {string} email - Email.
 * @property {string} ccEmails - A list of emails.
 * @property {string} url - The URL of this HostedNumberOrder.
 *
 * @param {Twilio.Preview.HostedNumbers} version - Version of the resource
 * @param {object} payload - The instance payload
 * @param {sid} sid - HostedNumberOrder sid.
 */
/* jshint ignore:end */
HostedNumberOrderInstance = function HostedNumberOrderInstance(version, payload,
    sid) {
  this._version = version;

  // Marshaled Properties
  this.sid = payload.sid; // jshint ignore:line
  this.accountSid = payload.account_sid; // jshint ignore:line
  this.incomingPhoneNumberSid = payload.incoming_phone_number_sid; // jshint ignore:line
  this.addressSid = payload.address_sid; // jshint ignore:line
  this.signingDocumentSid = payload.signing_document_sid; // jshint ignore:line
  this.phoneNumber = payload.phone_number; // jshint ignore:line
  this.capabilities = payload.capabilities; // jshint ignore:line
  this.friendlyName = payload.friendly_name; // jshint ignore:line
  this.uniqueName = payload.unique_name; // jshint ignore:line
  this.status = payload.status; // jshint ignore:line
  this.dateCreated = deserialize.iso8601DateTime(payload.date_created); // jshint ignore:line
  this.dateUpdated = deserialize.iso8601DateTime(payload.date_updated); // jshint ignore:line
  this.verificationAttempts = deserialize.integer(payload.verification_attempts); // jshint ignore:line
  this.email = payload.email; // jshint ignore:line
  this.ccEmails = payload.cc_emails; // jshint ignore:line
  this.url = payload.url; // jshint ignore:line

  // Context
  this._context = undefined;
  this._solution = {sid: sid || this.sid};
};

Object.defineProperty(HostedNumberOrderInstance.prototype,
  '_proxy', {
  get: function() {
    if (!this._context) {
      this._context = new HostedNumberOrderContext(this._version, this._solution.sid);
    }

    return this._context;
  }
});

/* jshint ignore:start */
/**
 * fetch a HostedNumberOrderInstance
 *
 * @function fetch
 * @memberof Twilio.Preview.HostedNumbers.HostedNumberOrderInstance
 * @instance
 *
 * @param {function} [callback] - Callback to handle processed record
 *
 * @returns {Promise} Resolves to processed HostedNumberOrderInstance
 */
/* jshint ignore:end */
HostedNumberOrderInstance.prototype.fetch = function fetch(callback) {
  return this._proxy.fetch(callback);
};

/* jshint ignore:start */
/**
 * remove a HostedNumberOrderInstance
 *
 * @function remove
 * @memberof Twilio.Preview.HostedNumbers.HostedNumberOrderInstance
 * @instance
 *
 * @param {function} [callback] - Callback to handle processed record
 *
 * @returns {Promise} Resolves to processed HostedNumberOrderInstance
 */
/* jshint ignore:end */
HostedNumberOrderInstance.prototype.remove = function remove(callback) {
  return this._proxy.remove(callback);
};

/* jshint ignore:start */
/**
 * update a HostedNumberOrderInstance
 *
 * @function update
 * @memberof Twilio.Preview.HostedNumbers.HostedNumberOrderInstance
 * @instance
 *
 * @param {object|function} opts - ...
 * @param {string} [opts.friendlyName] -
 *          A human readable description of this resource.
 * @param {string} [opts.uniqueName] -
 *          A unique, developer assigned name of this HostedNumberOrder.
 * @param {string} [opts.email] - Email.
 * @param {string|list} [opts.ccEmails] - A list of emails.
 * @param {hosted_number_order.status} [opts.status] -
 *          The Status of this HostedNumberOrder.
 * @param {string} [opts.verificationCode] - A verification code.
 * @param {function} [callback] - Callback to handle processed record
 *
 * @returns {Promise} Resolves to processed HostedNumberOrderInstance
 */
/* jshint ignore:end */
HostedNumberOrderInstance.prototype.update = function update(opts, callback) {
  return this._proxy.update(opts, callback);
};


/* jshint ignore:start */
/**
 * @constructor Twilio.Preview.HostedNumbers.HostedNumberOrderContext
 * @description Initialize the HostedNumberOrderContext
 * PLEASE NOTE that this class contains preview products that are subject to change. Use them with caution. If you currently do not have developer preview access, please contact help@twilio.com.
 *
 * @param {Twilio.Preview.HostedNumbers} version - Version of the resource
 * @param {sid} sid - HostedNumberOrder sid.
 */
/* jshint ignore:end */
HostedNumberOrderContext = function HostedNumberOrderContext(version, sid) {
  this._version = version;

  // Path Solution
  this._solution = {sid: sid};
  this._uri = _.template(
    '/HostedNumberOrders/<%= sid %>' // jshint ignore:line
  )(this._solution);
};

/* jshint ignore:start */
/**
 * fetch a HostedNumberOrderInstance
 *
 * @function fetch
 * @memberof Twilio.Preview.HostedNumbers.HostedNumberOrderContext
 * @instance
 *
 * @param {function} [callback] - Callback to handle processed record
 *
 * @returns {Promise} Resolves to processed HostedNumberOrderInstance
 */
/* jshint ignore:end */
HostedNumberOrderContext.prototype.fetch = function fetch(callback) {
  var deferred = Q.defer();
  var promise = this._version.fetch({uri: this._uri, method: 'GET'});

  promise = promise.then(function(payload) {
    deferred.resolve(new HostedNumberOrderInstance(this._version, payload, this._solution.sid));
  }.bind(this));

  promise.catch(function(error) {
    deferred.reject(error);
  });

  if (_.isFunction(callback)) {
    deferred.promise.nodeify(callback);
  }

  return deferred.promise;
};

/* jshint ignore:start */
/**
 * remove a HostedNumberOrderInstance
 *
 * @function remove
 * @memberof Twilio.Preview.HostedNumbers.HostedNumberOrderContext
 * @instance
 *
 * @param {function} [callback] - Callback to handle processed record
 *
 * @returns {Promise} Resolves to processed HostedNumberOrderInstance
 */
/* jshint ignore:end */
HostedNumberOrderContext.prototype.remove = function remove(callback) {
  var deferred = Q.defer();
  var promise = this._version.remove({uri: this._uri, method: 'DELETE'});

  promise = promise.then(function(payload) {
    deferred.resolve(payload);
  }.bind(this));

  promise.catch(function(error) {
    deferred.reject(error);
  });

  if (_.isFunction(callback)) {
    deferred.promise.nodeify(callback);
  }

  return deferred.promise;
};

/* jshint ignore:start */
/**
 * update a HostedNumberOrderInstance
 *
 * @function update
 * @memberof Twilio.Preview.HostedNumbers.HostedNumberOrderContext
 * @instance
 *
 * @param {object|function} opts - ...
 * @param {string} [opts.friendlyName] -
 *          A human readable description of this resource.
 * @param {string} [opts.uniqueName] -
 *          A unique, developer assigned name of this HostedNumberOrder.
 * @param {string} [opts.email] - Email.
 * @param {string|list} [opts.ccEmails] - A list of emails.
 * @param {hosted_number_order.status} [opts.status] -
 *          The Status of this HostedNumberOrder.
 * @param {string} [opts.verificationCode] - A verification code.
 * @param {function} [callback] - Callback to handle processed record
 *
 * @returns {Promise} Resolves to processed HostedNumberOrderInstance
 */
/* jshint ignore:end */
HostedNumberOrderContext.prototype.update = function update(opts, callback) {
  if (_.isFunction(opts)) {
    callback = opts;
    opts = {};
  }
  opts = opts || {};

  var deferred = Q.defer();
  var data = values.of({
    'FriendlyName': _.get(opts, 'friendlyName'),
    'UniqueName': _.get(opts, 'uniqueName'),
    'Email': _.get(opts, 'email'),
    'CcEmails': serialize.map(_.get(opts, 'ccEmails'), function(e) { return e; }),
    'Status': _.get(opts, 'status'),
    'VerificationCode': _.get(opts, 'verificationCode')
  });

  var promise = this._version.update({uri: this._uri, method: 'POST', data: data});

  promise = promise.then(function(payload) {
    deferred.resolve(new HostedNumberOrderInstance(this._version, payload, this._solution.sid));
  }.bind(this));

  promise.catch(function(error) {
    deferred.reject(error);
  });

  if (_.isFunction(callback)) {
    deferred.promise.nodeify(callback);
  }

  return deferred.promise;
};

module.exports = {
  HostedNumberOrderList: HostedNumberOrderList,
  HostedNumberOrderPage: HostedNumberOrderPage,
  HostedNumberOrderInstance: HostedNumberOrderInstance,
  HostedNumberOrderContext: HostedNumberOrderContext
};
