import Component from '@ember/component';
import layout from './template';
import { calc, compfn, curry } from 'dummy/utils/fn';

export const STATUS = {
  isBusy: { isBusy: true },
  isIdle: { isIdle: true },
  isSuccess: { isSuccess: true },
  isError: { isError: true }
}

const ID = x => x
const fansec = (f, g = ID) => (...args) => [f(...args), g(...args)][1];

const CANCEL_ERROR = new Error("Cancel request failed for some reason");
const CANCELER_ERROR = new Error("Canceler died while attempting to cancel");

const promiseToAff = (req) => {
  return (onError, onSuccess) => {
    req().catch(onError).then(onSuccess)

    return (_cancelError, _cancelerError, cancelSuccess) => {
      // Can't cancel promises, so meh
      cancelSuccess();
    }
  }
}
export default Component.extend({
  layout,
  tagName: '',
  curry,
  _startRequest: calc(
    (beforeReq, aff) => {
      beforeReq();
      return aff;
    },
    'beforeRequest',
    'requestAff',
  ),
  requestAff: calc(
    promiseToAff,
    'requestFn'
  ),
  beforeRequest: compfn(self => {
    self.set('model', null)
    self.set('error', null)
    self.set('status', STATUS.isBusy)
  }),
  _onError: calc(
    fansec,
    'defaultOnError',
    'onError'
  ),
  defaultOnError: compfn((self, error) => {
    self.set('error', error)
    self.set('status', STATUS.isError)
  }),
  _onSuccess: calc(
    fansec,
    'defaultOnSuccess',
    'onSuccess'
  ),
  defaultOnSuccess: compfn((self, model) => {
    self.set('model', model)
    self.set('status', STATUS.isSuccess)
  }),
  _cancelError: calc(
    fansec,
    'defaultCancelError',
    'cancelError'
  ),
  defaultCancelError: compfn(self => {
    self.set('status', STATUS.isError)
    self.set('error', CANCEL_ERROR)
  }),
  _cancelerError: calc(
    fansec,
    'defaultCancelerError',
    'cancelerError',
  ),
  defaultCancelerError: compfn(self => {
    self.set('status', STATUS.isError)
    self.set('error', CANCELER_ERROR)
  }),
  _cancelSuccess: calc(
    fansec,
    'defaultCancelSuccess',
    'cancelSuccess',
  ),
  defaultCancelSuccess: compfn(self => {
    self.set('status', STATUS.isIdle)
  }),
  model: null,
  status: STATUS.isIdle,
  error: null,
}).reopenClass({
  positionalParams: ['requestFn']
});
