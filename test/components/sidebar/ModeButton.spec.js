import { React, TestUtils, testdom, fixtures } from '../../react-helpers';
import ModeButton from '../../../src/scripts/components/sidebar/controlPanel/ModeButton.jsx';
import Actions from '../../../src/scripts/actions/index.js';

describe("Mode Button", () => {
  let button;

  beforeEach(() => {
    testdom('<html><body></body></html>');
    Actions.switchMode = sinon.spy();
  })

  describe("when button is not active", () => {

    beforeEach(() => {
      button = renderButton('learn', 'browse');
    })

    it("has no class of active", () => {
      expect(button.className).not.to.equal('active');
    });

  });

  describe("when button is active", () => {

    beforeEach(() => {
      button = renderButton('browse', 'browse');
    })

    it("has no class of active", () => {
      expect(button.className).to.equal('active');
    });
  });

  describe("when button is clicked", () => {

    beforeEach(() => {
      button = renderButton('browse', 'browse');
      React.addons.TestUtils.Simulate.click(button);
    });

    it("should authenticate the user", () => {
      expect(Actions.switchMode).to.be.calledOnce;
    });
  });
});

function renderButton(current, mode){
  let container = TestUtils.renderIntoDocument(
    <ModeButton current={ current } mode={ mode }/>
  );

  return React.findDOMNode(container.refs.browseButton);
}