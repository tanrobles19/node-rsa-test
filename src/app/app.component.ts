import { Component, VERSION } from "@angular/core";
import { Buffer } from "buffer";
import NodeRSA from "node-rsa";

const pubKey =
  "30819F300D06092A864886F70D010101050003818D0030818902818100B2E9AFAFEED76A5C31D069F84328D785DFE6C40A69F51B29C7D7C91EF171A5EF6AD9FC30AF31F4B59C0FE317E47B5DBAA04E3753AC7F8B0E54D8EB4372894900DE247FD11B8C2208FE1C837ADEC409B0F2EE89A5C54B8AB80D5934FC65100406077D129DC5EB961E883B937C4251FDA4BD77224D1CDEF09151894F902758AA3B0203010001000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  name = "Angular " + VERSION.major;

  encrypt() {
    const buff = Buffer.from(pubKey, "hex");
    console.log(Buffer.from("ä!$%&/(", "utf8"));
    const rsa = new NodeRSA(buff.slice(22), "pkcs1-public-der", {
      encryptionScheme: "pkcs1"
    });
    console.log(rsa.encrypt("abc", "hex"));
  }
}
