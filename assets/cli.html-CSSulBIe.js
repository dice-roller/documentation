import{_ as t,c as r,d as n,e as a,b as e,a as o,w as c,r as l,o as d}from"./app-D_ihkTSB.js";const m={},u={id:"cli",tabindex:"-1"},h={class:"header-anchor",href:"#cli"};function v(b,s){const i=l("Badge"),p=l("RouteLink");return d(),r("div",null,[n("h1",u,[n("a",h,[n("span",null,[s[0]||(s[0]=a("CLI ",-1)),e(i,{text:"New",vertical:"middle"})])])]),s[4]||(s[4]=o(`<p>To use this library directly in the command line, you need to install the <a href="https://github.com/dice-roller/cli" target="_blank" rel="noopener noreferrer">CLI library</a>.</p><h2 id="install" tabindex="-1"><a class="header-anchor" href="#install"><span>Install</span></a></h2><p>Install the script globally:</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre><code class="language-bash"><span class="line"><span class="token function">npm</span> <span class="token function">install</span> <span class="token parameter variable">-g</span> @dice-roller/cli</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h2 id="usage" tabindex="-1"><a class="header-anchor" href="#usage"><span>Usage</span></a></h2><h3 id="roll-some-dice" tabindex="-1"><a class="header-anchor" href="#roll-some-dice"><span>Roll some dice</span></a></h3><div class="language-text" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">roller &lt;notation..&gt; [options]</span>
<span class="line"></span>
<span class="line">Commands:</span>
<span class="line">  roller roll &lt;notation..&gt;  roll the dice                              [default]</span>
<span class="line">  roller play               play an interactive CLI dice game</span>
<span class="line"></span>
<span class="line">Positionals:</span>
<span class="line">  notation  space separated list of notation to roll                    [string]</span>
<span class="line"></span>
<span class="line">Options:</span>
<span class="line">  -V, --version      Show version number                               [boolean]</span>
<span class="line">      --help         Show help                                         [boolean]</span>
<span class="line">  -s, --separator    String to separate dice rolls      [string] [default: &quot;; &quot;]</span>
<span class="line">  -e, --engine       The RNG engine to use                              [string]</span>
<span class="line">      --seed         The RNG engine seed                                [number]</span>
<span class="line">  -f, --format       The output format              [string] [default: &quot;string&quot;]</span>
<span class="line">      --result-only  Only return the roll result, without the notation or dice</span>
<span class="line">                     rolled                           [boolean] [default: false]</span>
<span class="line"></span>
<span class="line">Examples:</span>
<span class="line">  roller 4d6     roll a 6 sided die 4 times</span>
<span class="line">  roller 2d10+7  roll a 10 sided die 2 times and add 7</span>
<span class="line">  roller play    start the interactive CLI dice game</span>
<span class="line"></span>
<span class="line">For more information visit https://dice-roller.github.io/documentation</span>
<span class="line"></span></code></pre></div><h3 id="play-a-game" tabindex="-1"><a class="header-anchor" href="#play-a-game"><span>Play a game</span></a></h3><div class="language-text" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">roller play</span>
<span class="line"></span>
<span class="line">play an interactive CLI dice game</span>
<span class="line"></span>
<span class="line">Options:</span>
<span class="line">  -V, --version  Show version number                                   [boolean]</span>
<span class="line">      --help     Show help                                             [boolean]</span>
<span class="line">      --players  The name of a player                                    [array]</span>
<span class="line">      --count    The number of players                                  [number]</span>
<span class="line"></span>
<span class="line">For more information visit https://dice-roller.github.io/documentation</span>
<span class="line"></span></code></pre></div><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples"><span>Examples</span></a></h2><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre><code class="language-bash"><span class="line"><span class="token comment"># Roll a 6 sided die 4 times</span></span>
<span class="line">roller 4d6</span>
<span class="line"></span>
<span class="line"><span class="token comment"># Roll a series of dice</span></span>
<span class="line">roller 2d10 7d% 5dF</span>
<span class="line"></span>
<span class="line"><span class="token comment"># Notation with spaces must be surrounded with quotes</span></span>
<span class="line">roller <span class="token string">&quot;4d6 # roll description&quot;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># Use the MersenneTwister19937 engine (\`seed\` is not required)</span></span>
<span class="line">roller 4d6 <span class="token parameter variable">-e</span><span class="token operator">=</span>MersenneTwister19937 <span class="token parameter variable">--seed</span><span class="token operator">=</span><span class="token number">415</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># Return just the result rolled</span></span>
<span class="line">roller 2d20 --result-only</span>
<span class="line"></span>
<span class="line"><span class="token comment"># Output the result in base64 encoding</span></span>
<span class="line">roller 6d8*4 <span class="token parameter variable">-f</span><span class="token operator">=</span>BASE_64</span>
<span class="line"></span>
<span class="line"><span class="token comment"># Start the interactive dice game</span></span>
<span class="line">roller play</span>
<span class="line"></span>
<span class="line"><span class="token comment"># Start the game with 4 players</span></span>
<span class="line">roller play <span class="token parameter variable">--count</span><span class="token operator">=</span><span class="token number">4</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># Start the game with 2 players called Barbara and Ian</span></span>
<span class="line">roller play <span class="token parameter variable">--players</span><span class="token operator">=</span>Barbara Ian</span>
<span class="line"></span>
<span class="line"><span class="token comment"># Start the game with two players, but only name the first one</span></span>
<span class="line">roller play <span class="token parameter variable">--count</span><span class="token operator">=</span><span class="token number">2</span> <span class="token parameter variable">--players</span><span class="token operator">=</span>Susan</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,11)),n("p",null,[s[2]||(s[2]=a("You can use all the ",-1)),e(p,{to:"/guide/notation/"},{default:c(()=>[...s[1]||(s[1]=[a("notation",-1)])]),_:1}),s[3]||(s[3]=a(" in the CLI.",-1))])])}const k=t(m,[["render",v]]),f=JSON.parse('{"path":"/guide/cli.html","title":"CLI","lang":"en-GB","frontmatter":{},"git":{"updatedTime":1770500753000,"contributors":[{"name":"Lee Langley","username":"","email":"lee@greenimp.co.uk","commits":1}],"changelog":[{"hash":"c7f065d172cd37bea20d1e1cc7653015a290eaa6","time":1770500753000,"email":"lee@greenimp.co.uk","author":"Lee Langley","message":"Remove duplicate dependencies"}]},"filePathRelative":"guide/cli.md"}');export{k as comp,f as data};
