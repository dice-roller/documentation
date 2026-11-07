import{_ as e,C as l,o as p,c as t,j as a,a as n,E as r,ak as h}from"./chunks/framework.DIgTxpuq.js";const C=JSON.parse('{"title":"CLI","description":"","frontmatter":{},"headers":[],"relativePath":"guide/cli.md","filePath":"guide/cli.md","lastUpdated":1794042109000}'),o={name:"guide/cli.md"},d={id:"cli",tabindex:"-1"};function k(c,s,g,F,u,y){const i=l("Badge");return p(),t("div",null,[a("h1",d,[s[0]||(s[0]=n("CLI ",-1)),r(i,{text:"New"}),s[1]||(s[1]=n()),s[2]||(s[2]=a("a",{class:"header-anchor",href:"#cli","aria-label":'Permalink to "CLI <Badge text="New"/>"'},"​",-1))]),s[3]||(s[3]=h(`<p>To use this library directly in the command line, you need to install the <a href="https://github.com/dice-roller/cli" target="_blank" rel="noreferrer">CLI library</a>.</p><h2 id="install" tabindex="-1">Install <a class="header-anchor" href="#install" aria-label="Permalink to &quot;Install&quot;">​</a></h2><p>Install the script globally:</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">npm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> install</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -g</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> @dice-roller/cli</span></span></code></pre></div><h2 id="usage" tabindex="-1">Usage <a class="header-anchor" href="#usage" aria-label="Permalink to &quot;Usage&quot;">​</a></h2><h3 id="roll-some-dice" tabindex="-1">Roll some dice <a class="header-anchor" href="#roll-some-dice" aria-label="Permalink to &quot;Roll some dice&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>roller &lt;notation..&gt; [options]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Commands:</span></span>
<span class="line"><span>  roller roll &lt;notation..&gt;  roll the dice                              [default]</span></span>
<span class="line"><span>  roller play               play an interactive CLI dice game</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Positionals:</span></span>
<span class="line"><span>  notation  space separated list of notation to roll                    [string]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Options:</span></span>
<span class="line"><span>  -V, --version      Show version number                               [boolean]</span></span>
<span class="line"><span>      --help         Show help                                         [boolean]</span></span>
<span class="line"><span>  -s, --separator    String to separate dice rolls      [string] [default: &quot;; &quot;]</span></span>
<span class="line"><span>  -e, --engine       The RNG engine to use                              [string]</span></span>
<span class="line"><span>      --seed         The RNG engine seed                                [number]</span></span>
<span class="line"><span>  -f, --format       The output format              [string] [default: &quot;string&quot;]</span></span>
<span class="line"><span>      --result-only  Only return the roll result, without the notation or dice</span></span>
<span class="line"><span>                     rolled                           [boolean] [default: false]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Examples:</span></span>
<span class="line"><span>  roller 4d6     roll a 6 sided die 4 times</span></span>
<span class="line"><span>  roller 2d10+7  roll a 10 sided die 2 times and add 7</span></span>
<span class="line"><span>  roller play    start the interactive CLI dice game</span></span>
<span class="line"><span></span></span>
<span class="line"><span>For more information visit https://dice-roller.github.io/documentation</span></span></code></pre></div><h3 id="play-a-game" tabindex="-1">Play a game <a class="header-anchor" href="#play-a-game" aria-label="Permalink to &quot;Play a game&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>roller play</span></span>
<span class="line"><span></span></span>
<span class="line"><span>play an interactive CLI dice game</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Options:</span></span>
<span class="line"><span>  -V, --version  Show version number                                   [boolean]</span></span>
<span class="line"><span>      --help     Show help                                             [boolean]</span></span>
<span class="line"><span>      --players  The name of a player                                    [array]</span></span>
<span class="line"><span>      --count    The number of players                                  [number]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>For more information visit https://dice-roller.github.io/documentation</span></span></code></pre></div><h2 id="examples" tabindex="-1">Examples <a class="header-anchor" href="#examples" aria-label="Permalink to &quot;Examples&quot;">​</a></h2><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># Roll a 6 sided die 4 times</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">roller</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 4d6</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># Roll a series of dice</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">roller</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 2d10</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 7d%</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 5dF</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># Notation with spaces must be surrounded with quotes</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">roller</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;4d6 # roll description&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># Use the MersenneTwister19937 engine (\`seed\` is not required)</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">roller</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 4d6</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -e=MersenneTwister19937</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --seed=415</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># Return just the result rolled</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">roller</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 2d20</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --result-only</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># Output the result in base64 encoding</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">roller</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 6d8</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">*</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">4</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -f=BASE_64</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># Start the interactive dice game</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">roller</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> play</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># Start the game with 4 players</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">roller</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> play</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --count=4</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># Start the game with 2 players called Barbara and Ian</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">roller</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> play</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --players=Barbara</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> Ian</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># Start the game with two players, but only name the first one</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">roller</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> play</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --count=2</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --players=Susan</span></span></code></pre></div><p>You can use all the <a href="./notation/">notation</a> in the CLI.</p>`,12))])}const b=e(o,[["render",k]]);export{C as __pageData,b as default};
