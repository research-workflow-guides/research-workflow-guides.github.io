## Install VS Code

<div class="doc-step-pair">
  <div class="doc-step-copy">
    <div class="doc-action-row">
      <p>On the official VS Code download page, choose the Windows <strong>User Installer</strong>. Download the x64 installer for an Intel or AMD PC, or the Arm64 installer for an Arm PC.</p>
      <a class="doc-action-link" href="https://code.visualstudio.com/Download">Official VS Code downloads</a>
    </div>
  </div>
  <figure class="image-frame">
    <img src="/assets/images/1.2-2.png" alt="Windows installer options on the VS Code download page">
  </figure>
</div>

Run the downloaded installer and follow its prompts. The User Installer installs VS Code for your account without requiring administrator permissions. When setup finishes, open VS Code and confirm that its start screen appears.

## Install LaTeX Workshop

Select the Extensions icon on the left side of VS Code, or press `Ctrl+Shift+X` to open the Extensions view.

<p><a class="doc-action-link" href="https://marketplace.visualstudio.com/items?itemName=James-Yu.latex-workshop">LaTeX Workshop on the VS Code Marketplace</a></p>

<div class="doc-step-pair">
  <div class="doc-step-copy">
    <p>Search for <strong>LaTeX Workshop</strong>. Select the extension published by <strong>James Yu</strong> and choose <strong>Install</strong>.</p>
  </div>
  <figure class="image-frame">
    <img src="/assets/images/1.2-3.png" alt="James Yu's LaTeX Workshop in VS Code Extensions search results">
  </figure>
</div>

<div class="doc-step-pair">
  <div class="doc-step-copy">
    <p>Find LaTeX Workshop in the Installed extensions list. If it is marked Disabled, choose <strong>Enable</strong> or <strong>Enable (Workspace)</strong> from its Manage menu. Reload the VS Code window if prompted.</p>
  </div>
  <figure class="image-frame">
    <img src="/assets/images/1.2-4.png" alt="LaTeX Workshop in the VS Code Installed extensions list">
  </figure>
</div>

## Check the build command

Open the Command Palette with `Ctrl+Shift+P` and search for `Build LaTeX project`. If the command does not appear, open a `.tex` file and search again, then check that LaTeX Workshop is enabled. You will build a PDF in the next project-template step.
