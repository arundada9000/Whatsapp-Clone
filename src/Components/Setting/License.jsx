import React from "react";

const License = ({ licenseOpen, setLicenseOpen }) => {
  return (
    <div
      className={`${
        licenseOpen ? "flex" : "hidden"
      } fixed top-0 left-0 right-0 bottom-0 overflow-auto bg-black/40 flex items-center justify-center z-60`}
    >
      <div className="bg-[rgb(46,45,45)] flex flex-col gap-3 p-5 rounded-xl max-h-screen">
        <h1 className="text-xl">Licenses</h1>
        <div className="p-4 rounded-lg text-sm flex-1 overflow-auto max-w-[600px] max-h-[500px] bg-white text-black">
          Third Party Notices THE FOLLOWING SETS FORTH ATTRIBUTION NOTICES FOR
          THIRD PARTY SOFTWARE THAT MAY BE CONTAINED IN PORTIONS OF THIS
          PRODUCT. Apache License 2.0 The following components are licensed
          under Apache License 2.0 reproduced below:
          Microsoft.AspNet.TelemetryCorrelation, Copyright (c) .NET Foundation.
          All rights reserved. RestSharp, Copyright (c) .NET Foundation and
          Contributors, All Rights Reserved abseil-cpp, Copyright 2021 The
          Abseil Authors. bazel-skylib, Copyright 2017 The Bazel Authors. All
          rights reserved color-emoji, Copyright 2013 Google, Inc. All Rights
          Reserved. cpu_features, Copyright 2017 Google LLC flatcc, Copyright
          2015 Mikkel F. Jørgensen, dvide.com folly, Copyright (c) Meta
          Platforms, Inc. and affiliates gradle, © Gradle Inc. 2024
          java-annotations, Copyright 2000-2016 JetBrains s.r.o. mbedtls 2.25.0,
          Copyright The Mbed TLS Contributors noto-emoji, Copyright 2014 Google
          Inc. All rights reserved. oboe 1.7.0, Copyright 2017 The Android Open
          Source Project protobuf, Copyright 2012 Peter Hultqvist visqol 3,
          Copyright 2019 Google LLC, Andrew Hines Apache License Version 2.0,
          January 2004 http://www.apache.org/licenses/ TERMS AND CONDITIONS FOR
          USE, REPRODUCTION, AND DISTRIBUTION 1. Definitions. "License" shall
          mean the terms and conditions for use, reproduction, and distribution
          as defined by Sections 1 through 9 of this document. "Licensor" shall
          mean the copyright owner or entity authorized by the copyright owner
          that is granting the License. "Legal Entity" shall mean the union of
          the acting entity and all other entities that control, are controlled
          by, or are under common control with that entity. For the purposes of
          this definition, "control" means (i) the power, direct or indirect, to
          cause the direction or management of such entity, whether by contract
          or otherwise, or (ii) ownership of fifty percent (50%) or more of the
          outstanding shares, or (iii) beneficial ownership of such entity.
          "You" (or "Your") shall mean an individual or Legal Entity exercising
          permissions granted by this License. "Source" form shall mean the
          preferred form for making modifications, including but not limited to
          software source code, documentation source, and configuration files.
          "Object" form shall mean any form resulting from mechanical
          transformation or translation of a Source form, including but not
          limited to compiled object code, generated documentation, and
          conversions to other media types. "Work" shall mean the work of
          authorship, whether in Source or Object form, made available under the
          License, as indicated by a copyright notice that is included in or
          attached to the work (an example is provided in the Appendix below).
          "Derivative Works" shall mean any work, whether in Source or Object
          form, that is based on (or derived from) the Work and for which the
          editorial revisions, annotations, elaborations, or other modifications
          represent, as a whole, an original work of authorship. For the
          purposes of this License, Derivative Works shall not include works
          that remain separable from, or merely link (or bind by name) to the
          interfaces of, the Work and Derivative Works thereof. "Contribution"
          shall mean any work of authorship, including the original version of
          the Work and any modifications or additions to that Work or Derivative
          Works thereof, that is intentionally submitted to Licensor for
          inclusion in the Work by the copyright owner or by an individual or
          Legal Entity authorized to submit on behalf of the copyright owner.
          For the purposes of this definition, "submitted" means any form of
          electronic, verbal, or written communication sent to the Licensor or
          its representatives, including but not limited to communication on
          electronic mailing lists, source code control systems, and issue
          tracking systems that are managed by, or on behalf of, the Licensor
          for the purpose of discussing and improving the Work, but excluding
          communication that is conspicuously marked or otherwise designated in
          writing by the copyright owner as "Not a Contribution." "Contributor"
          shall mean Licensor and any individual or Legal Entity on behalf of
          whom a Contribution has been received by Licensor and subsequently
          incorporated within the Work. 2. Grant of Copyright License. Subject
          to the terms and conditions of this License, each Contributor hereby
          grants to You a perpetual, worldwide, non-exclusive, no-charge,
          royalty-free, irrevocable copyright license to reproduce, prepare
          Derivative Works of, publicly display, publicly perform, sublicense,
          and distribute the Work and such Derivative Works in Source or Object
          form. 3. Grant of Patent License. Subject to the terms and conditions
          of this License, each Contributor hereby grants to You a perpetual,
          worldwide, non-exclusive, no-charge, royalty-free, irrevocable (except
          as stated in this section) patent license to make, have made, use,
          offer to sell, sell, import, and otherwise transfer the Work, where
          such license applies only to those patent claims licensable by such
          Contributor that are necessarily infringed by their Contribution(s)
          alone or by combination of their Contribution(s) with the Work to
          which such Contribution(s) was submitted. If You institute patent
          litigation against any entity (including a cross-claim or counterclaim
          in a lawsuit) alleging that the Work or a Contribution incorporated
          within the Work constitutes direct or contributory patent
          infringement, then any patent licenses granted to You under this
          License for that Work shall terminate as of the date such litigation
          is filed.
        </div>
        <div className="flex items-center justify-end">
          <button
            className="px-3 py-2 text-sm text-white cursor-pointer bg-[rgb(59,59,59,255)] rounded-lg"
            onClick={() => setLicenseOpen(false)}
          >
            OK
          </button>
        </div>
      </div>
    </div>
  );
};
export default License;
